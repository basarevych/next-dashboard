module.exports = {
  firstName: {
    normalize: "rows:1|compact:spaces",
    transform: "trim",
    validate: "required",
    label: "SHIPPING_FIRST_NAME_LABEL"
  },
  middleName: {
    normalize: "rows:1|compact:spaces",
    transform: "trim",
    label: "SHIPPING_MIDDLE_NAME_LABEL"
  },
  lastName: {
    normalize: "rows:1|compact:spaces",
    transform: "trim",
    validate: "required",
    label: "SHIPPING_LAST_NAME_LABEL"
  },
  address: {
    normalize: "rows:2|compact:spaces",
    transform: "trim",
    validate: "required",
    label: "SHIPPING_ADDRESS_LABEL"
  },
  city: {
    normalize: "rows:1|compact:spaces",
    transform: "trim",
    validate: "required",
    label: "SHIPPING_CITY_LABEL"
  },
  state: {
    normalize: "rows:1|compact:spaces",
    transform: "trim",
    label: "SHIPPING_STATE_LABEL"
  },
  code: {
    normalize: "rows:1|compact:spaces",
    transform: "trim",
    validate: "required",
    label: "SHIPPING_CODE_LABEL"
  },
  country: {
    normalize: "rows:1|compact:spaces",
    transform: "trim",
    validate: "required",
    label: "SHIPPING_COUNTRY_LABEL"
  },
  phone: {
    normalize: "phone",
    transform: "trim",
    validate: "required|phone",
    label: "SHIPPING_PHONE_LABEL"
  },
  email: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required|email",
    label: "SHIPPING_EMAIL_LABEL"
  }
};
