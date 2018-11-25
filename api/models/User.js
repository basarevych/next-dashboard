"use strict";

const validator = require("validator");
const constants = require("../../common/constants");

module.exports = app => {
  const db = app.di.get("db");
  let schema = new db.mongoose.Schema({
    _id: {
      type: db.mongoose.Schema.Types.ObjectId,
      auto: true
    },
    whenCreated: {
      type: Date,
      required: [true, "ERROR_FIELD_REQUIRED"]
    },
    whenUpdated: {
      type: Date,
      required: [true, "ERROR_FIELD_REQUIRED"]
    },
    email: {
      type: String,
      required: [true, "ERROR_FIELD_REQUIRED"],
      validate: {
        validator: value => validator.isEmail(value),
        message: _.constant("ERROR_INVALID_EMAIL")
      }
    },
    emailToken: {
      type: String
    },
    isEmailVerified: {
      type: Boolean,
      required: [true, "ERROR_FIELD_REQUIRED"]
    },
    password: {
      type: String
    },
    name: {
      type: String
    },
    roles: {
      type: [String],
      enum: _.values(constants.roles),
      required: [true, "ERROR_FIELD_REQUIRED"]
    },
    providers: {
      type: [db.ProviderSchema],
      required: [true, "ERROR_FIELD_REQUIRED"]
    }
  });

  return schema;
};
