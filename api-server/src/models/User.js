const BaseModel = require("./BaseModel");
const constants = require("../../common/constants");
const validationSchema = require("../../common/forms/createUser");

class User extends BaseModel {
  constructor(di, db, client, provider) {
    super(di);

    this.validationSchema = validationSchema;
    this.roles = Object.values(constants.roles);
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
        validate: this.getFieldValidator("whenCreated")
      },
      whenUpdated: {
        type: Date,
        default: Date.now,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("whenUpdated")
      },
      email: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("email")
      },
      emailToken: {
        type: String,
        validate: this.getFieldValidator("emailToken")
      },
      isEmailVerified: {
        type: Boolean,
        default: false,
        validate: this.getFieldValidator("isEmailVerified")
      },
      name: {
        type: String,
        validate: this.getFieldValidator("name")
      },
      password: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("password")
      },
      roles: {
        type: [String],
        enum: this.roles,
        default: [],
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("roles")
      },
      clients: {
        type: [this.client.schema],
        default: [],
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("clients")
      },
      providers: {
        type: [this.provider.schema],
        default: [],
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("providers")
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

    const self = this;
    this.schema.pre("save", function() {
      const values = self.cast(
        this.toObject({ getters: true, virtuals: true })
      );
      for (let field of Object.keys(values)) this[field] = values[field];

      this.whenUpdated = Date.now();

      if (!this.roles.includes(constants.roles.AUTHENTICATED))
        this.roles.push(constants.roles.AUTHENTICATED);
    });

    this.schema.methods.validateField = this.getValidateMethod();

    this.model = this.db.mongoose.model("User", this.schema);
  }

  static get $provides() {
    return "model.user";
  }

  static get $requires() {
    return ["di", "db", "model.user.client", "model.user.provider"];
  }

  static get $lifecycle() {
    return "singleton";
  }
}

module.exports = User;
