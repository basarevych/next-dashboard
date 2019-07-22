const Redis = require("ioredis");
const { RedisPubSub } = require("graphql-redis-subscriptions");
const BaseClass = require("../common/src/cache");

/**
 * Cache (Redis)
 */
class Cache extends BaseClass {
  constructor(config) {
    const cacheRedis = new Redis(config.redisUrl, { lazyConnect: true });
    const pubRedis = new Redis(config.redisUrl, { lazyConnect: true });
    const subRedis = new Redis(config.redisUrl, { lazyConnect: true });

    super(cacheRedis);

    this.config = config;
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
    return ["config"];
  }

  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;
    this.promise = Promise.resolve().then(async () => {
      await Promise.all([
        this.cacheRedis.connect(),
        this.pubRedis.connect(),
        this.subRedis.connect()
      ]);
      console.log("> Redis is online");
    });
    return this.promise;
  }
}

module.exports = Cache;
