module.exports = _.assign(
  {
    cardNumber: {
      normalize: "credit_card:number",
      transform: "trim",
      validate: "required|credit_card:number",
      label: "BILLING_CARD_NUMBER_LABEL"
    },
    cardDate: {
      normalize: "credit_card:date",
      transform: "trim",
      validate: "required|credit_card:date",
      label: "BILLING_CARD_DATE_LABEL"
    },
    cardSecret: {
      normalize: "credit_card:secret",
      transform: "trim",
      validate: "required|credit_card:secret",
      label: "BILLING_CARD_SECRET_LABEL"
    },
    isSameAddress: {
      label: "BILLING_SAME_ADDRESS_LABEL"
    }
  },
  require("./shipping")
);
