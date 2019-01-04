const EventEmitter = require("events");

class Dashboard extends EventEmitter {
  constructor(dashboardRepo) {
    super();

    this.dashboardRepo = dashboardRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.dashboard";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["repository.dashboard"];
  }

  async gql() {
    return {
      Query: {
        countries: async (parent, args, context) =>
          this.dashboardRepo.getCountries(context, args),
        country: async (parent, args, context) =>
          this.dashboardRepo.getCountry(context, args),
        employees: async (parent, args, context) =>
          this.dashboardRepo.getEmployees(context, args),
        profit: async (parent, args, context) =>
          this.dashboardRepo.getProfit(context, args),
        sales: async (parent, args, context) =>
          this.dashboardRepo.getSales(context, args),
        clients: async (parent, args, context) =>
          this.dashboardRepo.getClients(context, args),
        avgTime: async (parent, args, context) =>
          this.dashboardRepo.getAvgTime(context, args)
      }
    };
  }
}

module.exports = Dashboard;
