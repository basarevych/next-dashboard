const debug = require("debug")("app:data");
const Router = require("express").Router;

class DataRoute {
  constructor(dashboardRepo) {
    this.dashboardRepo = dashboardRepo;
  }

  static get $provides() {
    return "route.data";
  }

  static get $requires() {
    return ["repository.dashboard"];
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = (async () => {
      await this.dashboardRepo.init();

      this.usCities = [];
      for (let arr of Object.values(this.dashboardRepo.usStatesById))
        this.usCities = this.usCities.concat(arr);

      this.usCitiesJson = JSON.stringify(this.usCities);

      this.router = Router();
      this.router.get("/data/:name", this.getData.bind(this));
    })();

    return this.promise;
  }

  async getData(req, res, next) {
    debug("Got request");

    try {
      switch (req.params.name) {
        case "us-states":
          res.set("content-type", "application/json");
          res.send(this.dashboardRepo.usStatesJson);
          return;
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
