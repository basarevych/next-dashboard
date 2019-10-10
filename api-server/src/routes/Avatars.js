const debug = require("debug")("app:avatars");
const concat = require("concat-stream");
const fetch = require("isomorphic-unfetch");
const Jimp = require("jimp");
const Router = require("express").Router;
const shuffle = require("../../common/src/shuffle");

class AvatarsRoute {
  constructor(di, config, cache, user) {
    this.di = di;
    this.config = config;
    this.cache = cache;
    this.user = user;

    this.smallSize = 60;
    this.largeSize = 160;
    this.avatarPromises = [];
  }

  static get $provides() {
    return "route.avatars";
  }

  static get $requires() {
    return ["di", "config", "cache", "model.user"];
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = (async () => {
      try {
        let response = await fetch("https://tinyfac.es/api/users");
        if (response.status !== 200)
          throw new Error(`Service response: ${response.status}`);

        let data = await response.json();
        if (!Array.isArray(data) || !data.length)
          throw new Error("Failed to fetch avatars list");

        this.randomList = shuffle(data);
        this.randomSelected = [];

        const getRandomAvatar = male => {
          for (let i = 0; i < this.randomList.length; i++) {
            if (
              !(typeof male === "undefined") &&
              this.randomList[i].gender !== (male ? "male" : "female")
            ) {
              continue;
            }

            if (this.randomSelected.includes(i)) continue;

            for (let j = 0; j < this.randomList[i].avatars.length; j++) {
              if (
                // square avatars
                Math.abs(
                  this.randomList[i].avatars[j].width -
                    this.randomList[i].avatars[j].height
                ) <= 10
              ) {
                this.randomSelected.push(i);
                return;
              }
            }
          }
        };

        getRandomAvatar(true);
        getRandomAvatar(false);
        getRandomAvatar(true);
        getRandomAvatar(true);
      } catch (error) {
        console.log(`> Random avatars service: ${error.message}`);
      }

      this.router = Router();
      this.router.get("/avatars/:id", this.getAvatar.bind(this));
    })();

    return this.promise;
  }

  async fetch(url) {
    if (!url) return null;
    let response = await fetch(url);
    if (response.status === 200) {
      return new Promise((resolve, reject) => {
        let concatStream = concat(resolve);
        response.body.on("error", reject);
        response.body.pipe(concatStream);
      });
    }
    return null;
  }

  async downloadRandom(id) {
    const index = this.randomSelected[id];

    if (this.randomList[index].avatars.length)
      return this.fetch(this.randomList[index].avatars[0].url);

    return null;
  }

  async downloadReal(id) {
    let user = await this.user.model.findById(id);
    if (!user) return null;

    for (let provider of user.providers) {
      for (let photo of provider.profile.photos || []) {
        if (photo.value) return this.fetch(photo.value);
      }
    }

    return null;
  }

  async download(id) {
    if (this.avatarPromises[id]) return this.avatarPromises[id];

    this.avatarPromises[id] = Promise.resolve()
      .then(async () => {
        const match = /^x(\d)$/.exec(id);
        const data = match
          ? await this.downloadRandom(match[1])
          : await this.downloadReal(id);

        if (data) {
          debug(`Got data for ${id}`);
          const [small, large] = await Promise.all([
            Jimp.read(Buffer.from(data)).then(image => {
              return image
                .resize(Jimp.AUTO, this.smallSize)
                .getBufferAsync(Jimp.MIME_PNG);
            }),
            Jimp.read(Buffer.from(data)).then(image =>
              image
                .resize(Jimp.AUTO, this.largeSize)
                .getBufferAsync(Jimp.MIME_PNG)
            )
          ]);
          await this.cache.setAvatar(id, small, large);
          this.avatarPromises[id] = null;
          return { small, large };
        }

        return null;
      })
      .then(
        result => {
          this.avatarPromises[id] = null;
          return result;
        },
        error => {
          this.avatarPromises[id] = null;
          throw error;
        }
      );

    return this.avatarPromises[id];
  }

  /**
   * GET /avatars/:id
   * @param {object} req
   * @param {object} res
   * @param {function} next
   */
  async getAvatar(req, res, next) {
    debug("Got request");

    try {
      let image = await this.cache.getAvatar(req.params.id);
      debug(`Cache: ${image ? "hit" : "miss"}`);
      if (!image) image = await this.download(req.params.id);

      res.setHeader("Cache-Control", "public, must-revalidate, max-age=864000");
      if (image) {
        res.set("content-type", "image/png");
        res.send(req.query.size === "small" ? image.small : image.large);
      } else {
        res.redirect(this.config.apiAppServer + "/img/anonymous.png");
      }
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = AvatarsRoute;
