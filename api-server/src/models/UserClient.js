const BaseModel = require("./BaseModel");

class UserClient extends BaseModel {
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
      agent: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("agent")
      },
      ip: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("ip")
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

    this.model = this.db.mongoose.model("UserClient", this.schema);
  }

  static get $provides() {
    return "model.user.client";
  }

  static get $requires() {
    return ["di", "db"];
  }

  static get $lifecycle() {
    return "singleton";
  }
}

module.exports = UserClient;
