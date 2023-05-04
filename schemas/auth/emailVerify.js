const Joi = require("joi");
const valEm = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/;

const emailVerify = Joi.object({
  email: Joi.string().pattern(valEm).required().messages({
    "string.empty": `"email" cannot be an empty field`,
    "any.required": `"email" is a required field`,
  }),
});

module.exports = emailVerify;
