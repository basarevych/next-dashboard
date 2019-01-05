const EventEmitter = require("events");

class Provider extends EventEmitter {
  constructor(db) {
    super();

    this.db = db;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "model.provider";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["db"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  /*
  validate(field, value, allValues, callback) {
    let rules = fields[field];
    if (!rules || !rules.validate) return callback(true);
    let errors = validate({}, rules.validate, value, fromJS(allValues));
    if (!errors.length) return callback(true);
    return callback(false, errors.length === 1 ? errors[0] : errors);
  }
  */

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();

    this.schema = new this.db.mongoose.Schema({
      _id: {
        type: this.db.mongoose.Schema.Types.ObjectId,
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
        type: this.db.mongoose.Schema.Types.Mixed,
        required: [true, "ERROR_FIELD_REQUIRED"]
      },
      accessToken: {
        type: String
      },
      refreshToken: {
        type: String
      }
    });

    this.schema
      .virtual("id")
      .get(function() {
        return this._id.toString();
      })
      .set(function(id) {
        this.set("_id", this.db.ObjectId(id));
      });

    this.schema.methods.toSanitizedObject = function() {
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

    this.schema.static("conditions", function(conditions) {
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

    this.schema.pre("save", function() {
      this.whenUpdated = Date.now();
    });

    this.model = this.db.mongoose.model("Provider", this.schema);
  }
}

module.exports = Provider;
