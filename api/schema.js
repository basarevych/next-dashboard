const constants = require("../common/constants");

module.exports = `
  scalar Date

  interface OperationStatus {
    success: Boolean!
  }

  type AuthOperationStatus implements OperationStatus {
    success: Boolean!
  }

  type UserOperationStatus implements OperationStatus {
    success: Boolean!
    id: String
  }

  type UserProviders {
    ${_.map(
      _.values(constants.oauthProviders),
      item => `${_.lowerCase(item)}: Boolean`
    ).join("\n")}
  }

  type UserStatus {
    isAuthenticated: Boolean!
    name: String
    email: String
    isEmailVerified: Boolean
    roles: [UserRole]
    providers: UserProviders
  }

  enum UserRole {
    ${_.values(constants.roles).join("\n")}
  }

  type User {
    id: String!
    whenCreated: Date!
    whenUpdated: Date!
    email: String!
    isEmailVerified: Boolean!
    name: String
    roles: [UserRole]!
  }

  type Country {
    code: String!
    name: String!
    callingCode: String!
  }

  enum Dept {
    ${_.keys(constants.depts).join("\n")}
  }

  type Employee {
    id: String
    checked: Boolean
    name: String
    dept: Dept
    title: String
    country: String
    salary: Float
  }

  type Profit {
    date: Date
    revenues: Float
    expenses: Float
    profit: Float
  }

  type Sales {
    date: Date
    sales: Float
  }

  type Clients {
    date: Date
    clients: Float
  }

  type AvgTime {
    date: Date
    avgTime: Float
  }

  type Query {
    status: UserStatus
    users: [User]

    countries: [Country]
    country(code: String): Country
    employees: [Employee]
    profit: [Profit]
    sales: [Sales]
    clients: [Clients]
    avgTime: [AvgTime]
  }

  type Mutation {
    signIn(email: String, password: String): AuthOperationStatus
    signUp(email: String, password: String): AuthOperationStatus
    signOut: AuthOperationStatus

    requestEmailVerification: AuthOperationStatus
    verifyEmail(token: String): AuthOperationStatus
    unlinkProvider(provider: String): AuthOperationStatus
    updateProfile(email: String, name: String, password: String): AuthOperationStatus
    deleteProfile: AuthOperationStatus

    createUser(email: String, name: String, password: String, roles: [UserRole]): UserOperationStatus
    editUser(id: String, email: String, name: String, password: String, roles: [UserRole]): UserOperationStatus
    deleteUser(id: String): UserOperationStatus
  }
`;
