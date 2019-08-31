module.exports = {
  firstName: {
    label: "SHIPPING_FIRST_NAME_LABEL",
    normalize: "compact:spaces",
    transform: "trim",
    validate: "required"
  },
  middleName: {
    label: "SHIPPING_MIDDLE_NAME_LABEL",
    normalize: "compact:spaces",
    transform: "trim"
  },
  lastName: {
    label: "SHIPPING_LAST_NAME_LABEL",
    normalize: "compact:spaces",
    transform: "trim",
    validate: "required"
  },
  address: {
    label: "SHIPPING_ADDRESS_LABEL",
    normalize: "rows:2|compact:spaces",
    transform: "trim",
    validate: "required"
  },
  city: {
    label: "SHIPPING_CITY_LABEL",
    normalize: "compact:spaces",
    transform: "trim",
    validate: "required"
  },
  state: {
    label: "SHIPPING_STATE_LABEL",
    normalize: "compact:spaces",
    transform: "trim"
  },
  code: {
    label: "SHIPPING_CODE_LABEL",
    normalize: "compact:spaces",
    transform: "trim",
    validate: "required"
  },
  country: {
    label: "SHIPPING_COUNTRY_LABEL",
    normalize: "compact:spaces",
    transform: "trim",
    validate: "required"
  },
  phone: {
    label: "SHIPPING_PHONE_LABEL",
    normalize: "phone",
    transform: "trim",
    validate: "required|phone"
  },
  email: {
    label: "SHIPPING_EMAIL_LABEL",
    normalize: "remove:spaces",
    transform: "trim",
    validate: "required|email"
  }
};
