const Redis = require("ioredis");
const { RedisPubSub } = require("graphql-redis-subscriptions");
const BaseClass = require("../common/src/cache");

/**
 * Cache (Redis)
 */
class Cache extends BaseClass {
  constructor(config, dashboard) {
    const cacheRedis = new Redis(config.redisUrl, { lazyConnect: true });
    const pubRedis = new Redis(config.redisUrl, { lazyConnect: true });
    const subRedis = new Redis(config.redisUrl, { lazyConnect: true });

    super(cacheRedis);

    this.statLength = 10;

    this.config = config;
    this.dashboard = dashboard;
    this.pubRedis = pubRedis;
    this.subRedis = subRedis;

    this.pubsub = new RedisPubSub({
      publisher: this.pubRedis,
      subscriber: this.subRedis
    });
  }

  static get $provides() {
    return "cache";
  }

  static get $requires() {
    return ["config", "model.dashboard"];
  }

  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;
    this.promise = (async () => {
      if (process.env.NODE_ENV !== "test") {
        process.stdout.write("> Redis... ");
        await Promise.all([
          this.cacheRedis.connect(),
          this.pubRedis.connect(),
          this.subRedis.connect()
        ]);
        console.log("online");
      }
    })();
    return this.promise;
  }

  _statNameToKey(name) {
    return name;
  }

  async getStats({ name }) {
    if (!name) return null;

    let key = this.namespace + ":stat:" + this._statNameToKey(name);
    let data = await this.cacheRedis.lrange(key, -this.statLength, -1);
    if (!Array.isArray(data)) return [];
    return data
      .map(item => {
        switch (name) {
          case "visitors":
            return this.dashboard.VisitorsValueModel.fromString(item);
          case "load":
            return this.dashboard.LoadValueModel.fromString(item);
          case "memory":
            return this.dashboard.MemoryValueModel.fromString(item);
          case "operations":
            return this.dashboard.OperationsValueModel.fromString(item);
          case "avgTime":
            return this.dashboard.AvgTimeValueModel.fromString(item);
        }
        return null;
      })
      .filter(item => !!item);
  }

  async getStatsLength({ name }) {
    if (!name) return null;

    let key = this.namespace + ":stat:" + this._statNameToKey(name);
    return this.cacheRedis.llen(key);
  }

  async getLastStat({ name }) {
    if (!name) return null;

    let key = this.namespace + ":stat:" + this._statNameToKey(name);
    let data = await this.cacheRedis.lrange(key, -1, -1);
    if (!Array.isArray(data)) return [];
    if (!data.length) return null;
    switch (name) {
      case "visitors":
        return this.dashboard.VisitorsValueModel.fromString(data[0]);
      case "load":
        return this.dashboard.LoadValueModel.fromString(data[0]);
      case "memory":
        return this.dashboard.MemoryValueModel.fromString(data[0]);
      case "operations":
        return this.dashboard.OperationsValueModel.fromString(data[0]);
      case "avgTime":
        return this.dashboard.AvgTimeValueModel.fromString(data[0]);
    }
    return null;
  }

  async pushStat({ name, model }) {
    if (!name || !model) return 0;

    let key = this.namespace + ":stat:" + this._statNameToKey(name);
    let result = await this.cacheRedis.rpush(key, model.toString());
    if (result) await this.cacheRedis.ltrim(key, -this.statLength, -1);
    return result;
  }
}

module.exports = Cache;
