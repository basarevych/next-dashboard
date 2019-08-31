const validate = require("../../common/src/validate");

class BaseModel {
  constructor() {
    this.fields = {};
  }

  getFieldValidator(field) {
    const self = this;
    return {
      validator: async function(value) {
        let rules = self.fields[field];
        if (!rules || !rules.validate) return true;
        let errors = validate(
          rules.validate,
          value,
          this.toObject({ getters: true, virtuals: true })
        );
        if (!errors.length) return true;
        throw errors.length === 1 ? errors[0] : errors;
      }
    };
  }

  getValidateMethod() {
    const self = this;
    return async function(field, value) {
      const { validator } = self.getFieldValidator(field);
      try {
        await validator.bind(this)(value);
      } catch (error) {
        throw this.di.get("error.validation", {
          errors: { password: { message: error } }
        });
      }
    };
  }

  async init() {}
}

module.exports = BaseModel;
