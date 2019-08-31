module.exports = _.assign(
  {
    cardNumber: {
      label: "BILLING_CARD_NUMBER_LABEL",
      normalize: "credit_card:number",
      transform: "trim",
      validate: "required|credit_card:number"
    },
    cardDate: {
      label: "BILLING_CARD_DATE_LABEL",
      normalize: "credit_card:date",
      transform: "trim",
      validate: "required|credit_card:date"
    },
    cardSecret: {
      label: "BILLING_CARD_SECRET_LABEL",
      normalize: "credit_card:secret",
      transform: "trim",
      validate: "required|credit_card:secret"
    },
    isSameAddress: {
      label: "BILLING_SAME_ADDRESS_LABEL"
    }
  },
  require("./shipping")
);
