const Joi = require("joi");
const valEm = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/;

const registerSchema = Joi.object({
  email: Joi.string().pattern(valEm).required().messages({
    "string.empty": `"email" cannot be an empty field`,
    "any.required": `"email" is a required field`,
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": `"password" cannot be an empty field`,
    "any.required": `"password" is a required field`,
  }),
  subscription: Joi.string(),
});

module.exports = registerSchema;
