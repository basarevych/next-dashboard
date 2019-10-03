const yup = require("yup");
const shipping = require("../shipping");

module.exports = field =>
  function(isSameAddress, schema) {
    if (isSameAddress) return schema;
    return schema.concat(yup.reach(shipping, field).clone());
  };
