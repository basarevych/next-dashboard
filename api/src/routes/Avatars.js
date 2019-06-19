const debug = require("debug")("app:avatars");
const concat = require("concat-stream");
const sharp = require("sharp");
const Router = require("express").Router;

class AvatarsRoute {
  constructor(di, config, cache, user) {
    this.di = di;
    this.config = config;
    this.cache = cache;
    this.user = user;
    this.router = Router();

    this.fetchInterval = 60; // minutes
    this.smallWidth = 60;
    this.largeWidth = 160;
    this.fetchTime = 0;
    this.avatars = [];
  }

  static get $provides() {
    return "route.avatars";
  }

  static get $requires() {
    return ["di", "config", "cache", "model.user"];
  }

  async init() {
    if (this.promise) return this.promise;
    this.promise = Promise.resolve();
    this.router.get("/avatars/:id", this.getAvatar.bind(this));
  }

  async randomize() {
    if (this.fetchPromise) return this.fetchPromise;
    this.fetchTime = Date.now();

    if (process.env.NODE_ENV !== "test") console.log("> Updating avatar list");

    this.fetchPromise = new Promise(async (resolve, reject) => {
      this.avatars = [];
      let list;

      try {
        let response = await fetch("https://tinyfac.es/api/users");
        debug(`Tinyfaces response: ${response.status}`);
        if (response.status === 200) {
          let data = await response.json();
          if (!_.isArray(data) || !data.length)
            throw new Error("Failed to fetch avatars list");
          list = _.shuffle(data);
        }
      } catch (error) {
        console.log(`> ${error.message}`);
        return resolve();
      }

      debug(`List size: ${list.length}`);

      try {
        let used = [];
        const getRandomAvatar = male => {
          for (let i = 0; i < list.length; i++) {
            if (
              !_.isUndefined(male) &&
              list[i].gender !== (male ? "male" : "female")
            ) {
              continue;
            }

            if (_.includes(used, i)) continue;

            for (let j = 0; j < list[i].avatars.length; j++) {
              if (
                list[i].avatars[j].width >= this.largeWidth &&
                list[i].avatars[j].height >= this.largeWidth &&
                Math.abs(
                  list[i].avatars[j].width - list[i].avatars[j].height
                ) <= 10
              ) {
                used.push(i);
                debug(`Selected ${list[i].avatars[j].url}`);
                return this.avatars.push(list[i].avatars[j].url);
              }
            }
          }
          this.avatars.push(null);
        };

        getRandomAvatar(true);
        getRandomAvatar(false);
        getRandomAvatar(true);
        getRandomAvatar(true);
      } catch (error) {
        reject(error);
      }

      resolve();
    }).then(
      () => {
        this.fetchPromise = null;
      },
      error => {
        this.fetchPromise = null;
        throw error;
      }
    );

    return this.fetchPromise;
  }

  async download(url) {
    try {
      let type, data;
      if (_.startsWith(url, "http")) {
        let response = await fetch(url);
        if (response.status === 200) {
          type = response.headers.get("Content-Type");
          data = await new Promise((resolve, reject) => {
            let concatStream = concat(resolve);
            response.body.on("error", reject);
            response.body.pipe(concatStream);
          });
        }
      }

      if (type && data) {
        debug(`Got data for ${url}`);
        return Promise.all([
          sharp(Buffer.from(data))
            .resize(this.smallWidth)
            .toBuffer(),
          sharp(Buffer.from(data))
            .resize(this.largeWidth)
            .toBuffer()
        ]).then(([small, large]) => ({ type, small, large }));
      }
    } catch (error) {
      console.error(error);
    }

    return null;
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
      if (Date.now() - this.fetchTime > this.fetchInterval * 60 * 1000)
        this.randomize();

      if (this.fetchPromise) await this.fetchPromise;

      let url;
      const match = /^x(\d)$/.exec(req.params.id);
      if (match) {
        // random avatar
        url = this.avatars[parseInt(match[1])];
      } else {
        // user avatar
        let user = await this.user.model.findById(req.params.id);
        if (user) {
          for (let provider of user.providers) {
            if (provider.profile.photos && provider.profile.photos.length)
              url = provider.profile.photos[0].value;
            if (url) break;
          }
        }
      }
      if (!url) url = this.config.apiAppServer + "/static/img/anonymous.png";
      debug(url);

      let image = await this.cache.getAvatar(url);
      debug(`Cache: ${image ? "hit" : "miss"}`);
      if (!image) {
        image = await this.download(url);
        if (image)
          await this.cache.setAvatar(url, image.type, image.small, image.large);
      }

      res.setHeader("Cache-Control", "public, must-revalidate, max-age=864000");

      if (image) {
        res.set("content-type", image.type);
        res.send(req.query.size === "large" ? image.large : image.small);
      } else {
        throw this.di.get("error.notFound");
      }
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = AvatarsRoute;
