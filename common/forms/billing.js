const yup = require("yup");
const transformDigits = require("./lib/transformDigits");
const transformMonthYear = require("./lib/transformMonthYear");
const testCreditCardNumber = require("./lib/testCreditCardNumber");
const testCreditCardDate = require("./lib/testCreditCardDate");
const testCreditCardSecret = require("./lib/testCreditCardSecret");
const matchShippingAddress = require("./lib/matchShippingAddress");

module.exports = yup.object().shape({
  cardNumber: yup
    .string()
    .meta({ label: "BILLING_CARD_NUMBER_LABEL" })
    .transform(transformDigits)
    .required("ERROR_FIELD_REQUIRED")
    .test(
      "is-credit-card-number",
      "ERROR_INVALID_CREDIT_CARD_NUMBER",
      testCreditCardNumber
    ),

  cardDate: yup
    .string()
    .meta({ label: "BILLING_CARD_DATE_LABEL" })
    .transform(transformMonthYear)
    .required("ERROR_FIELD_REQUIRED")
    .test(
      "is-credit-card-date",
      "ERROR_INVALID_CREDIT_CARD_DATE",
      testCreditCardDate
    ),

  cardSecret: yup
    .string()
    .meta({ label: "BILLING_CARD_SECRET_LABEL" })
    .transform(transformDigits)
    .required("ERROR_FIELD_REQUIRED")
    .test(
      "is-credit-card-secret",
      "ERROR_INVALID_CREDIT_CARD_SECRET",
      testCreditCardSecret
    ),

  isSameAddress: yup.boolean().meta({
    label: "BILLING_SAME_ADDRESS_LABEL"
  }),

  firstName: yup
    .string()
    .meta({ label: "SHIPPING_FIRST_NAME_LABEL" })
    .when("isSameAddress", matchShippingAddress("firstName")),

  middleName: yup
    .string()
    .meta({ label: "SHIPPING_MIDDLE_NAME_LABEL" })
    .when("isSameAddress", matchShippingAddress("middleName")),

  lastName: yup
    .string()
    .meta({ label: "SHIPPING_LAST_NAME_LABEL" })
    .when("isSameAddress", matchShippingAddress("lastName")),

  address: yup
    .string()
    .meta({ label: "SHIPPING_ADDRESS_LABEL" })
    .when("isSameAddress", matchShippingAddress("address")),

  city: yup
    .string()
    .meta({ label: "SHIPPING_CITY_LABEL" })
    .when("isSameAddress", matchShippingAddress("city")),

  state: yup
    .string()
    .meta({ label: "SHIPPING_STATE_LABEL" })
    .when("isSameAddress", matchShippingAddress("state")),

  code: yup
    .string()
    .meta({ label: "SHIPPING_CODE_LABEL" })
    .when("isSameAddress", matchShippingAddress("code")),

  country: yup
    .string()
    .meta({ label: "SHIPPING_COUNTRY_LABEL" })
    .when("isSameAddress", matchShippingAddress("country")),

  phone: yup
    .string()
    .meta({ label: "SHIPPING_PHONE_LABEL" })
    .when("isSameAddress", matchShippingAddress("phone")),

  email: yup
    .string()
    .meta({ label: "SHIPPING_EMAIL_LABEL" })
    .when("isSameAddress", matchShippingAddress("email"))
});
