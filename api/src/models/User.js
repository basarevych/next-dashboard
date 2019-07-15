const BaseModel = require("./BaseModel");
const constants = require("../../common/constants");
const fields = require("../../common/forms/createUser");

class User extends BaseModel {
  constructor(db, client, provider) {
    super();

    this.fields = fields;
    this.roles = _.values(constants.roles);
    this.sortBy = ["email", "name"];
    this.sortDir = ["asc", "desc"];

    this.db = db;
    this.client = client;
    this.provider = provider;

    this.schema = new this.db.mongoose.Schema({
      _id: {
        type: this.db.mongoose.Schema.Types.ObjectId,
        auto: true
      },
      whenCreated: {
        type: Date,
        default: Date.now,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("whenCreated")
      },
      whenUpdated: {
        type: Date,
        default: Date.now,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("whenUpdated")
      },
      email: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("email")
      },
      emailToken: {
        type: String,
        validate: this.getValidator("emailToken")
      },
      isEmailVerified: {
        type: Boolean,
        default: false,
        validate: this.getValidator("isEmailVerified")
      },
      name: {
        type: String,
        validate: this.getValidator("name")
      },
      password: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("password")
      },
      roles: {
        type: [String],
        enum: this.roles,
        default: [],
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("roles")
      },
      clients: {
        type: [this.client.schema],
        default: [],
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("clients")
      },
      providers: {
        type: [this.provider.schema],
        default: [],
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("providers")
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

    this.schema.pre("save", function() {
      this.whenUpdated = Date.now();
      if (!_.includes(this.roles, constants.roles.AUTHENTICATED))
        this.roles.push(constants.roles.AUTHENTICATED);
    });

    const self = this;
    this.schema.methods.validateField = async function(field, value) {
      const { validator } = self.getValidator(field);
      try {
        await validator.bind(this)(value);
      } catch (error) {
        throw this.di.get("error.validation", {
          errors: { password: { message: error } }
        });
      }
    };

    this.model = this.db.mongoose.model("User", this.schema);
  }

  static get $provides() {
    return "model.user";
  }

  static get $requires() {
    return ["db", "model.user.client", "model.user.provider"];
  }

  static get $lifecycle() {
    return "singleton";
  }
}

module.exports = User;
