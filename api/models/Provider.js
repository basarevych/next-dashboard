"use strict";

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
    name: {
      type: String,
      required: [true, "ERROR_FIELD_REQUIRED"]
    },
    profile: {
      type: db.mongoose.Schema.Types.Mixed,
      required: [true, "ERROR_FIELD_REQUIRED"]
    },
    accessToken: {
      type: String
    },
    refreshToken: {
      type: String
    }
  });

  return schema;
};
