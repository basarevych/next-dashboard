const crypto = require("crypto");

/**
 * Redis facade
 */
class Cache {
  /**
   * Constructor
   * @param {Object} redis - An instance of ioredis
   */
  constructor(redis) {
    this.cacheRedis = redis;
    this.namespace = "next-dashboard";
    this.otpTimeout = 60 * 60; // 1h
    this.pageTimeout = 15 * 60; // 15 min
    this.avatarTimeout = 60 * 60; // 1h
  }

  /**
   * Generate a key for the given secret
   * @param {string} secret - The secret
   * @return {string} The unique key
   */
  _otpToKey(secret) {
    const hash = crypto.createHash("md5");
    hash.update(secret);
    return this.namespace + ":otp:" + hash.digest("hex");
  }

  /**
   * Create a one-time token. The timer starts to tick
   * @param {string} secret - The secret
   * @return {*} ioredis operation result
   */
  async createOneTimeToken(secret) {
    let key = this._otpToKey(secret);
    let result = await this.cacheRedis.set(key, "true");
    await this.cacheRedis.expire(key, this.otpTimeout);
    return result;
  }

  /**
   * Consume a one-time token, destroying it
   * @param {string} secret - The secret
   * @return {boolean} True if the token was valid
   */
  async useOneTimeToken(secret) {
    let key = this._otpToKey(secret);
    return !!(await this.cacheRedis.del(key));
  }

  /**
   * Generate a key for a page path
   * @param {string} page - The path of a page
   * @return {string} The unique key
   */
  _pageToKey(page) {
    const hash = crypto.createHash("md5");
    hash.update(page);
    return hash.digest("hex").toUpperCase();
  }

  /**
   * Generate a key for a page query
   * @param {Object} query - The query for a page ({ var: value, ... })
   * @return {string} The unique key
   */
  _queryToKey(query) {
    // in order to not to rely on object's keys order, we convert
    // the object to an array of [prop, value] pairs sorted by "prop"

    let tmp = [];
    let params = Object.keys(query).sort();
    for (let item of params) tmp.push([item, query[item]]);

    const hash = crypto.createHash("md5");
    hash.update(JSON.stringify(tmp));
    return hash.digest("hex").toUpperCase();
  }

  /**
   * Generate a key for a user ID
   * @param {string} userId - The user ID
   * @return {string} The unique key
   */
  _userIdToKey(userId) {
    return userId ? userId.toUpperCase() : "anonymous";
  }

  /**
   * Store a page in the cache. The timer starts to tick
   * @param {Object} params
   * @param {string} params.page - The path of the page
   * @param {Object} params.query - The query object for the page ({ var: value, ... })
   * @param {string} params.userId - The user ID of the viewer
   * @param {string} params.html - Prerendered page content
   * @return {*} ioredis operation result
   */
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

  /**
   * Load a page from the cache
   * @param {Object} params
   * @param {string} params.page - The path of the page
   * @param {Object} params.query - The query object for the page ({ var: value, ... })
   * @param {string} params.userId - The user ID of the viewer
   * @return {string|null} The cached page content if found
   */
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

  /**
   * Search and remove pages from the cache
   * @param {Object} params
   * @param {string} params.page - The path of the page of "*" for any
   * @param {Object} params.query - The query object for the page ({ var: value, ... }) or "*" for any
   * @param {string} params.userId - The user ID of the viewer or "*" for any
   * @return {*} ioredis operation result
   */
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

  /**
   * Generate a key for the given user avatar
   * @param {string} userId - The user ID
   * @return {string} The unique key
   */
  _avatarToKey(userId) {
    return this.namespace + ":avatar:" + userId;
  }

  /**
   * Store an avatar in the cache. The timer starts to tick
   * @param {string} userId - The user ID
   * @param {Buffer} small - Small image
   * @param {buffer} large - Large image
   * @return {*} ioredis operation result
   */
  async setAvatar(userId, small, large) {
    if (!userId || !small || !large) return 0;
    let key = this._avatarToKey(userId);
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

  /**
   * Load an avatar from the cache
   * @param {string} userId - The user ID
   * @return {Object|null} Returns an object { small: Buffer, large: Buffer } if found or null
   */
  async getAvatar(userId) {
    let key = this._avatarToKey(userId);
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

  /**
   * Destroy all the cached data
   */
  async destroy() {
    return this.cacheRedis.flushdb();
  }
}

module.exports = Cache;
