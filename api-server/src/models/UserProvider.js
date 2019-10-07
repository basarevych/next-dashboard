const BaseModel = require("./BaseModel");

class UserProvider extends BaseModel {
  constructor(di, db) {
    super(di);

    this.db = db;

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
      name: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("name")
      },
      profile: {
        type: this.db.mongoose.Schema.Types.Mixed,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("profile")
      },
      accessToken: {
        type: String,
        validate: this.getFieldValidator("accessToken")
      },
      refreshToken: {
        type: String,
        validate: this.getFieldValidator("refreshToken")
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
    });

    this.schema.methods.validateField = this.getValidateMethod();

    this.model = this.db.mongoose.model("UserProvider", this.schema);
  }

  static get $provides() {
    return "model.user.provider";
  }

  static get $requires() {
    return ["di", "db"];
  }

  static get $lifecycle() {
    return "singleton";
  }
}

module.exports = UserProvider;
