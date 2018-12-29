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
        delete ret.accessToken;
        delete ret.refreshToken;
        ret.whenCreated = doc.whenCreated.valueOf();
        ret.whenUpdated = doc.whenUpdated.valueOf();
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
  });

  return schema;
};
