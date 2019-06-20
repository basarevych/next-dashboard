const crypto = require("crypto");

class Cache {
  constructor(redis) {
    this.cacheRedis = redis;
    this.namespace = "next-dashboard";
    this.otpTimeout = 60 * 60; // 1h
    this.pageTimeout = 15 * 60; // 15 min
    this.avatarTimeout = 60 * 60; // 1h
  }

  _otpToKey(secret) {
    const hash = crypto.createHash("md5");
    hash.update(secret);
    return this.namespace + ":otp:" + hash.digest("hex");
  }

  async createOneTimeToken(secret) {
    let key = this._otpToKey(secret);
    let result = await this.cacheRedis.set(key, "true");
    await this.cacheRedis.expire(key, this.otpTimeout);
    return result;
  }

  async useOneTimeToken(secret) {
    let key = this._otpToKey(secret);
    return !!(await this.cacheRedis.del(key));
  }

  _pageToKey(page) {
    const hash = crypto.createHash("md5");
    hash.update(page);
    return _.toUpper(hash.digest("hex"));
  }

  _queryToKey(query) {
    let tmp = [];
    let params = _.keys(query).sort();
    for (let item of params) tmp.push([item, query[item]]);

    const hash = crypto.createHash("md5");
    hash.update(JSON.stringify(tmp));
    return _.toUpper(hash.digest("hex"));
  }

  _userIdToKey(userId) {
    return userId ? _.toUpper(userId) : "anonymous";
  }

  async setPage({ page, query, userId, html }) {
    if (!page || !query || !html) return 0;

    let key =
      this.namespace +
      ":page:" +
      this._pageToKey(page) +
      ":query:" +
      this._queryToKey(query) +
      ":userId:" +
      this._userIdToKey(userId);

    let result = await this.cacheRedis.set(key, html);
    await this.cacheRedis.expire(key, this.pageTimeout);

    if (result && process.env.NODE_ENV !== "test") {
      console.log(
        `> Cache: set (page: ${page}, user: ${userId || "anonymous"})`
      );
    }

    return result;
  }

  async getPage({ page, query, userId }) {
    if (!page || !query) return null;

    let key =
      this.namespace +
      ":page:" +
      this._pageToKey(page) +
      ":query:" +
      this._queryToKey(query) +
      ":userId:" +
      this._userIdToKey(userId);

    let result = await this.cacheRedis.get(key);

    if (result && process.env.NODE_ENV !== "test") {
      console.log(
        `> Cache: hit (page: ${page}, user: ${userId || "anonymous"})`
      );
    }

    return result;
  }

  async delPage({ page, query, userId }) {
    let key =
      this.namespace +
      ":page:" +
      (page === "*" ? "*" : this._pageToKey(page)) +
      ":query:" +
      (query === "*" ? "*" : this._queryToKey(query)) +
      ":userId:" +
      (userId === "*" ? "*" : this._userIdToKey(userId));

    let cursor = "0";
    let result = 0;
    do {
      let scan = await this.cacheRedis.scan(cursor, "match", key);
      cursor = scan[0];
      if (scan[1].length) result += await this.cacheRedis.del(...scan[1]);
    } while (cursor !== "0");

    if (result && process.env.NODE_ENV !== "test") {
      console.log(
        `> Cache: ${result} record(s) deleted (page: ${page}, user: ${
          userId === "*" ? "*" : userId || "anonymous"
        })`
      );
    }

    return result;
  }

  _avatarToKey(id) {
    return this.namespace + ":avatar:" + id;
  }

  async setAvatar(id, small, large) {
    if (!id || !small || !large) return 0;
    let key = this._avatarToKey(id);
    let result = 0;
    result += await this.cacheRedis.hset(
      key,
      "small",
      small.toString("base64")
    );
    result += await this.cacheRedis.hset(
      key,
      "large",
      large.toString("base64")
    );
    await this.cacheRedis.expire(key, this.avatarTimeout);
    return result;
  }

  async getAvatar(id) {
    let key = this._avatarToKey(id);
    let small = await this.cacheRedis.hget(key, "small");
    let large = await this.cacheRedis.hget(key, "large");
    if (small && large) {
      return {
        small: Buffer.from(small, "base64"),
        large: Buffer.from(large, "base64")
      };
    }
    return null;
  }

  async destroy() {
    return this.cacheRedis.flushdb();
  }
}

module.exports = Cache;
