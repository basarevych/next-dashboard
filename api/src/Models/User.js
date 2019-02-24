const { fromJS } = require("immutable");
const EventEmitter = require("events");
const ValidationError = require("../Errors/ValidationError");
const constants = require("../../../common/constants");
const fields = require("../../../common/forms/user");
const validate = require("../../../common/validate");

class User extends EventEmitter {
  constructor(db, provider) {
    super();

    this.roles = _.values(constants.roles);
    this.sortBy = ["email", "name"];
    this.sortDir = ["asc", "desc"];

    this.db = db;
    this.provider = provider;

    const self = this;
    const validateFactory = field => ({
      isAsync: true,
      validator: function(value, callback) {
        return self.validate(field, value, this.toObject(), callback);
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
      email: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: validateFactory("email")
      },
      emailToken: {
        type: String,
        validate: validateFactory("emailToken")
      },
      isEmailVerified: {
        type: Boolean,
        default: false,
        validate: validateFactory("isEmailVerified")
      },
      name: {
        type: String,
        validate: validateFactory("name")
      },
      password: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: validateFactory("password")
      },
      roles: {
        type: [String],
        enum: this.roles,
        default: [],
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: validateFactory("roles")
      },
      providers: {
        type: [this.provider.schema],
        default: [],
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: validateFactory("providers")
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
          const obj = this.toObject();
          const fieldErrors = validate({}, rules.validate, value, fromJS(obj));
          if (fieldErrors.length) {
            errors[field] =
              fieldErrors.length === 1 ? fieldErrors[0] : fieldErrors;
          }
        }
      }
      if (_.keys(errors).length && doThrow)
        throw new ValidationError({ errors });
      return errors || true;
    };

    this.schema.pre("save", function() {
      this.whenUpdated = Date.now();
      if (!_.includes(this.roles, constants.roles.AUTHENTICATED))
        this.roles.push(constants.roles.AUTHENTICATED);
    });

    this.model = this.db.mongoose.model("User", this.schema);
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "model.user";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["db", "model.provider"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  validate(field, value, allValues, callback) {
    let rules = fields[field];
    if (!rules || !rules.validate) return callback(true);
    let errors = validate({}, rules.validate, value, fromJS(allValues));
    if (!errors.length) return callback(true);
    return callback(false, errors.length === 1 ? errors[0] : errors);
  }

  async init() {}
}

module.exports = User;
