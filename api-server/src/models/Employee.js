const BaseModel = require("./BaseModel");
const validationSchema = require("../../common/forms/employee");
const constants = require("../../common/constants");

class Employee extends BaseModel {
  constructor(di, db) {
    super(di);

    this.validationSchema = validationSchema;
    this.depts = Object.values(constants.depts);
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
        validate: this.getFieldValidator("whenCreated")
      },
      whenUpdated: {
        type: Date,
        default: Date.now,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("whenUpdated")
      },
      uid: {
        type: Number,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("uid")
      },
      checked: {
        type: Boolean,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("checked")
      },
      name: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("name")
      },
      dept: {
        type: String,
        enum: this.depts,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("dept")
      },
      title: {
        type: String,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("title")
      },
      country: {
        id: {
          type: String,
          required: [true, "ERROR_FIELD_REQUIRED"],
          validate: this.getFieldValidator("countryId")
        },
        name: {
          type: String,
          required: [true, "ERROR_FIELD_REQUIRED"],
          validate: this.getFieldValidator("countryName")
        }
      },
      salary: {
        type: Number,
        required: [true, "ERROR_FIELD_REQUIRED"],
        validate: this.getFieldValidator("salary")
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
    });

    this.schema.methods.validateField = this.getValidateMethod();

    this.model = this.db.mongoose.model("Employee", this.schema);
  }

  static get $provides() {
    return "model.employee";
  }

  static get $requires() {
    return ["di", "db"];
  }

  static get $lifecycle() {
    return "singleton";
  }
}

module.exports = Employee;
