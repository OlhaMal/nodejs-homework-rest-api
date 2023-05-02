const Joi = require("joi");
const valEm = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/;

const loginSchema = Joi.object({
  email: Joi.string().pattern(valEm).required().messages({
    "string.empty": `"email" cannot be an empty field`,
    "any.required": `"email" is a required field`,
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": `"password" is a required field`,
    "string.empty": `"password" cannot be an empty field`,
  }),
});

module.exports = loginSchema;
