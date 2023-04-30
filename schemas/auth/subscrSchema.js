const Joi = require("joi");
const subEnum = ["starter", "pro", "business"];

const subscrSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subEnum)
    .required(),
});

module.exports = subscrSchema;
