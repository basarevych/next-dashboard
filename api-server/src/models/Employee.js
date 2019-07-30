const BaseModel = require("./BaseModel");
const fields = require("../../common/forms/employee");
const constants = require("../../common/constants");

class Employee extends BaseModel {
  constructor(db) {
    super();

    this.fields = fields;
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
      uid: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("uid")
      },
      checked: {
        type: Boolean,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("checked")
      },
      name: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("name")
      },
      dept: {
        type: String,
        enum: this.depts,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("dept")
      },
      title: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("title")
      },
      country: {
        id: {
          type: String,
          required: [true, "ERROR_FIELD_REQUIRED"],
          validate: this.getValidator("countryId")
        },
        name: {
          type: String,
          required: [true, "ERROR_FIELD_REQUIRED"],
          validate: this.getValidator("countryName")
        }
      },
      salary: {
        type: Number,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getValidator("salary")
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

    this.model = this.db.mongoose.model("Employee", this.schema);
  }

  static get $provides() {
    return "model.employee";
  }

  static get $requires() {
    return ["db"];
  }

  static get $lifecycle() {
    return "singleton";
  }
}

module.exports = Employee;
