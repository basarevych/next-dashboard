const debug = require("debug")("app:avatars");
const fs = require("fs-extra");
const path = require("path");
const concat = require("concat-stream");
const sharp = require("sharp");
const LRU = require("lru-cache");
const EventEmitter = require("events");
const Router = require("express").Router;
const constants = require("../../../common/constants");

/**
 * Avatars route
 */
class AvatarsRoute extends EventEmitter {
  constructor() {
    super();

    this.router = Router();

    this.fetchInterval = 60; // minutes
    this.maxAvatars = 5; // id 0 is our profile pic, id 1-4 are used in dashboard
    this.largeWidth = 160;
    this.smallWidth = 60;

    this.fetchTime = 0;
    this.avatars = [];
    this.cache = new LRU(50);
    this.anonymous = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "static",
      "img",
      "anonymous.png"
    );
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "route.avatars";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();
    this.router.get("/avatars/:id", this.getAvatar.bind(this));
  }

  async randomize() {
    if (this.fetchPromise) return this.fetchPromise;
    if (process.env.NODE_ENV !== "test") console.log("> Updating avatar list");
    this.fetchPromise = new Promise(async (resolve, reject) => {
      this.avatars = [];
      let list;

      try {
        let response = await fetch("https://tinyfac.es/api/users");
        if (response.status === 200) {
          let data = await response.json();
          if (!_.isArray(data) || !data.length)
            throw new Error("Failed to fetch avatars list");
          list = _.shuffle(data);
        }
      } catch (error) {
        console.log(`> ${error.message}`);
        for (let i = 0; i < this.maxAvatars; i++)
          this.avatars.push(this.anonymous);
        return resolve();
      }

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
                return this.avatars.push(list[i].avatars[j].url);
              }
            }
          }
          this.avatars.push(this.anonymous);
        };

        getRandomAvatar();
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
        this.fetchTime = Date.now();
        this.fetchPromise = null;
      },
      error => {
        this.fetchTime = Date.now();
        this.fetchPromise = null;
        throw error;
      }
    );

    return this.fetchPromise;
  }

  async download(url) {
    try {
      let type;
      let data;
      if (url[0] !== "/" && url[0] !== "\\") {
        let response = await fetch(url);
        if (response.status === 200) {
          type = response.headers.get("Content-Type");
          data = await new Promise((resolve, reject) => {
            let concatStream = concat(resolve);
            response.body.on("error", reject);
            response.body.pipe(concatStream);
          });
        }
      } else {
        type = "image/png";
        data = fs.readFileSync(url);
      }

      return Promise.all([
        sharp(Buffer.from(data))
          .resize(this.largeWidth)
          .toBuffer(),
        sharp(Buffer.from(data))
          .resize(this.smallWidth)
          .toBuffer()
      ]).then(([dataLarge, dataSmall]) => ({
        type,
        dataLarge,
        dataSmall
      }));
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
      let image;
      let url;

      if (req.params.id === "0") {
        // own avatar
        let user = await req.getUser();
        if (user && !_.includes(user.roles, constants.roles.ANONYMOUS)) {
          for (let provider of user.providers) {
            if (provider.profile.photos && provider.profile.photos.length)
              url = provider.profile.photos[0].value;
            if (!url && provider.name === constants.oauthProviders.FACEBOOK) {
              url =
                "https://graph.facebook.com/" +
                provider.profile.id +
                "/picture?type=large";
            }
            if (url && !_.startsWith(url, "http")) url = null;
            if (url) break;
          }
        } else {
          url = this.avatars[0];
        }
      } else {
        // random avatar
        if (Date.now() - this.fetchTime > this.fetchInterval * 60 * 1000)
          await this.randomize();
        url = this.avatars[parseInt(req.params.id)];
      }

      if (!url) url = this.anonymous;

      if (this.cache.has(url)) {
        image = this.cache.get(url);
      } else {
        image = await this.download(url);
        if (image) this.cache.set(url, image);
      }

      res.setHeader("Cache-Control", "public, must-revalidate, max-age=864000");

      if (image) {
        res.set("content-type", image.type);
        res.send(req.params.id === "0" ? image.dataLarge : image.dataSmall);
      } else {
        let error = new Error("Not Found");
        error.status = 404;
        throw error;
      }
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = AvatarsRoute;
