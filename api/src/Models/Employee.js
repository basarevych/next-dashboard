const EventEmitter = require("events");
const ValidationError = require("../Errors/ValidationError");
const fields = require("../../../common/forms/employee");
const validate = require("../../../common/validate");
const constants = require("../../../common/constants");

class Employee extends EventEmitter {
  constructor(db) {
    super();

    this.depts = _.values(constants.depts);
    this.sortBy = [
      "uid",
      "checked",
      "name",
      "dept",
      "title",
      "country",
      "salary"
    ];
    this.sortDir = ["asc", "desc"];

    this.db = db;

    const self = this;
    const validateFactory = field => ({
      validator: async function(value) {
        return self.validate(field, value, this.toObject());
      }
    });

    this.schema = new this.db.mongoose.Schema({
      _id: {
        type: this.db.mongoose.Schema.Types.ObjectId,
        auto: true
      },
      whenCreated: {
        type: Date,
        default: Date.now,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: validateFactory("whenCreated")
      },
      whenUpdated: {
        type: Date,
        default: Date.now,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: validateFactory("whenUpdated")
      },
      uid: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: validateFactory("uid")
      },
      checked: {
        type: Boolean,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: validateFactory("checked")
      },
      name: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: validateFactory("name")
      },
      dept: {
        type: String,
        enum: this.depts,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: validateFactory("dept")
      },
      title: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: validateFactory("title")
      },
      country: {
        id: {
          type: String,
          required: [true, "ERROR_FIELD_REQUIRED"],
          validate: validateFactory("countryId")
        },
        name: {
          type: String,
          required: [true, "ERROR_FIELD_REQUIRED"],
          validate: validateFactory("countryName")
        }
      },
      salary: {
        type: Number,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: validateFactory("salary")
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
      if (_.includes(this.schema.requiredPaths(), path) && !value) {
        errors[field] = { message: "ERROR_FIELD_REQUIRED" };
      } else {
        const rules = fields[field];
        if (rules && rules.validate) {
          const fieldErrors = validate(rules.validate, value, this.toObject());
          if (fieldErrors.length) {
            errors[field] = {
              message: fieldErrors.length === 1 ? fieldErrors[0] : fieldErrors
            };
          }
        }
      }
      if (_.keys(errors).length && doThrow)
        throw new ValidationError({ errors });
      return errors || true;
    };

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

  async validate(field, value, allValues) {
    let rules = fields[field];
    if (!rules || !rules.validate) return true;
    let errors = validate(rules.validate, value, allValues);
    if (!errors.length) return true;
    throw errors.length === 1 ? errors[0] : errors;
  }

  async init() {}
}

module.exports = Employee;
