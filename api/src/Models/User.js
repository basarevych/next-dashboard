const { fromJS } = require("immutable");
const EventEmitter = require("events");
const ValidationError = require("../Errors/ValidationError");
const constants = require("../../../common/constants");
const fields = require("../../../common/forms/user");
const validate = require("../../../common/validate");

class UserSchema extends EventEmitter {
  constructor(db, provider) {
    super();

    this.db = db;
    this.provider = provider;
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

  async init() {
    if (this.promise) return this.promise;

    this.promise = new Promise(async (resolve, reject) => {
      try {
        await this.provider.init();

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
          password: {
            type: String,
            required: [true, "ERROR_FIELD_REQUIRED"],
            validate: validateFactory("password")
          },
          name: {
            type: String,
            validate: validateFactory("name")
          },
          roles: {
            type: [String],
            enum: _.values(constants.roles),
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
          let error;
          if (_.includes(this.schema.requiredPaths(), path) && !value) {
            error = { key: field, message: "ERROR_FIELD_REQUIRED" };
          } else {
            const rules = fields[field];
            if (rules && rules.validate) {
              const obj = this.toObject();
              const fieldErrors = validate(
                {},
                rules.validate,
                value,
                fromJS(obj)
              );
              if (fieldErrors.length) {
                error = {
                  key: field,
                  message:
                    fieldErrors.length === 1 ? fieldErrors[0] : fieldErrors
                };
              }
            }
          }
          if (error && doThrow) throw new ValidationError([error]);
          return error || false;
        };

        this.schema.methods.toSanitizedObject = function() {
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
          if (
            !_.includes(this.roles, constants.roles.ANONYMOUS) &&
            !_.includes(this.roles, constants.roles.AUTHENTICATED)
          ) {
            this.roles.push(constants.roles.AUTHENTICATED);
          }
        });

        this.model = this.db.mongoose.model("User", this.schema);

        resolve();
      } catch (error) {
        reject(error);
      }
    });
    return this.promise;
  }
}

module.exports = UserSchema;
