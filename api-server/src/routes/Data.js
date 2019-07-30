const debug = require("debug")("app:data");
const Router = require("express").Router;

class DataRoute {
  constructor(dashboardRepo) {
    this.dashboardRepo = dashboardRepo;
    this.router = Router();
  }

  static get $provides() {
    return "route.data";
  }

  static get $requires() {
    return ["repository.dashboard"];
  }

  async init() {
    if (this.promise) return this.promise;
    this.promise = Promise.resolve().then(async () => {
      this.router.get("/data/:name", this.getData.bind(this));

      await this.dashboardRepo.init();

      this.usCities = [];
      for (let arr of _.values(this.dashboardRepo.usStatesById))
        this.usCities = this.usCities.concat(arr);

      this.usCitiesJson = JSON.stringify(this.usCities);
    });
    return this.promise;
  }

  async getData(req, res, next) {
    debug("Got request");

    try {
      switch (req.params.name) {
        case "us-cities":
          res.set("content-type", "application/json");
          res.send(this.usCitiesJson);
          return;
      }

      res.sendStatus(404);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = DataRoute;
