const EventEmitter = require("events");
const validate = require("../../../common/validate");

class BaseModel extends EventEmitter {
  constructor() {
    super();

    this.fields = {};
  }

  getValidator(field) {
    const self = this;
    return {
      validator: async function(value) {
        let rules = self.fields[field];
        if (!rules || !rules.validate) return true;
        let errors = validate(rules.validate, value, this.toObject());
        if (!errors.length) return true;
        throw errors.length === 1 ? errors[0] : errors;
      }
    };
  }

  async init() {}
}

module.exports = BaseModel;
