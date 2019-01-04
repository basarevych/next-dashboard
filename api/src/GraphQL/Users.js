const EventEmitter = require("events");

class Users extends EventEmitter {
  constructor(usersRepo) {
    super();

    this.usersRepo = usersRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.users";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["repository.users"];
  }

  async gql() {
    return {
      Query: {
        users: async (parent, args, context) =>
          this.usersRepo.getUsers(context, args)
      },
      Mutation: {
        createUser: async (parent, args, context) =>
          this.usersRepo.createUser(context, args),
        editUser: async (parent, args, context) =>
          this.usersRepo.editUser(context, args),
        deleteUser: async (parent, args, context) =>
          this.usersRepo.deleteUser(context, args)
      }
    };
  }
}

module.exports = Users;
