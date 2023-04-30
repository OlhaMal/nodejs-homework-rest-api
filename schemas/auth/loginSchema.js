const Joi = require("joi");
const valEm = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/;

const loginSchema = Joi.object({
  email: Joi.string().pattern(valEm).required(),
  password: Joi.string().min(6).required(),
});

module.exports = loginSchema;
