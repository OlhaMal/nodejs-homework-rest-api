const Joi = require("joi");

const contsctsShema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": `"name" cannot be an empty field`,
    "any.required": `"name" is a required field`,
  }),
  email: Joi.string().required().messages({
    "string.empty": `"email" cannot be an empty field`,
    "any.required": `"email" is a required field`,
  }),
  phone: Joi.string().required().messages({
    "string.empty": `"phone" cannot be an empty field`,
    "any.required": `"phone" is a required field`,
  }),
  favorite: Joi.boolean(),
});

module.exports = contsctsShema;
