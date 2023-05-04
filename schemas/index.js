const addShema = require("./contacts/contactsAdd");
const updateShema = require("./contacts/contactsUpdate");
const contactSchema = require("./contacts/mongooseSchema");
const favoriteSchema = require("./contacts/contactsFavorite");
const userSchema = require("./auth/RegisterUserSchema");
const subscrSchema = require("./auth/subscrSchema");
const registerSchema = require("./auth/registerSchema");
const loginSchema = require("./auth/loginSchema");
const emailVerify = require("./auth/emailVerify");

module.exports = {
  addShema,
  updateShema,
  contactSchema,
  favoriteSchema,
  userSchema,
  subscrSchema,
  registerSchema,
  loginSchema,
  emailVerify,
};
