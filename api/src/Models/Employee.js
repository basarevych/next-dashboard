const EventEmitter = require("events");
const ValidationError = require("../Errors/ValidationError");
const constants = require("../../../common/constants");

class Employee extends EventEmitter {
  constructor(db) {
    super();

    this.db = db;

    this.schema = new this.db.mongoose.Schema({
      _id: {
        type: this.db.mongoose.Schema.Types.ObjectId,
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
      checked: {
        type: Boolean,
        required: [true, "ERROR_FIELD_REQUIRED"]
      },
      name: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"]
      },
      dept: {
        type: [String],
        enum: _.values(constants.depts),
        default: [],
        required: [true, "ERROR_FIELD_REQUIRED"]
      },
      title: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"]
      },
      country: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"]
      },
      salary: {
        type: Number,
        required: [true, "ERROR_FIELD_REQUIRED"]
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

    this.schema.methods.validateField = async function({
      field,
      path,
      value,
      doThrow = true
    }) {
      if (!path) path = field;
      if (!field) field = path;
      let errors = {};
      if (_.includes(this.schema.requiredPaths(), path) && !value)
        errors[field] = { message: "ERROR_FIELD_REQUIRED" };
      if (_.keys(errors).length && doThrow)
        throw new ValidationError({ errors });
      return errors || true;
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

    this.model = this.db.mongoose.model("Employee", this.schema);
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "model.employee";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["db"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {}
}

module.exports = Employee;
