const addShema = require("./contactsAdd");
const updateShema = require("./contactsUpdate");
const contactSchema = require("./mongooseSchema");
const favoriteSchema = require("./contactsFavorite");

module.exports = {
  addShema,
  updateShema,
  contactSchema,
  favoriteSchema,
};
