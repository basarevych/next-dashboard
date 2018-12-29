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
      default: Date.now,
      required: [true, "ERROR_FIELD_REQUIRED"]
    },
    whenUpdated: {
      type: Date,
      default: Date.now,
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
      default: false
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
      default: [],
      required: [true, "ERROR_FIELD_REQUIRED"]
    },
    providers: {
      type: [db.ProviderSchema],
      default: [],
      required: [true, "ERROR_FIELD_REQUIRED"]
    }
  });

  schema
    .virtual("id")
    .get(function() {
      return this._id.toString();
    })
    .set(function(id) {
      this.set("_id", db.ObjectId(id));
    });

  schema.methods.toSanitizedObject = function() {
    return this.toObject({
      minimize: false,
      flattenMaps: true,
      transform: function(doc, ret) {
        ret.id = doc._id.toString();
        delete ret._id;
        delete ret.password;
        delete ret.emailToken;
        delete ret.providers;
        ret.whenCreated = doc.whenCreated.valueOf();
        ret.whenUpdated = doc.whenUpdated.valueOf();
        ret.roles = _.filter(
          doc.roles || [],
          role =>
            !_.includes(
              [constants.roles.AUTHENTICATED, constants.roles.ANONYMOUS],
              role
            )
        );
        return ret;
      }
    });
  };

  schema.static("conditions", function(conditions) {
    let transformed = _.assign({}, conditions);
    for (let key of _.keys(transformed)) {
      if (key === "id" || _.endsWith(key, ".id")) {
        let newKey = key.slice(0, key.length - 2) + "_id";
        transformed[newKey] = transformed[key];
        delete transformed[key];
      }
    }
    return transformed;
  });

  schema.pre("save", function() {
    this.whenUpdated = Date.now();
    if (
      !_.includes(this.roles, constants.roles.ANONYMOUS) &&
      !_.includes(this.roles, constants.roles.AUTHENTICATED)
    ) {
      this.roles.push(constants.roles.AUTHENTICATED);
    }
  });

  return schema;
};
