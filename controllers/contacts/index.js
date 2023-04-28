const listContacts = require("./listContacts");
const getById = require("./getById");
const addContact = require("./addContact");
const removeContact = require("./removeContact");
const updateContact = require("./updateContact");
const updateFavoriteContact = require("./updateFavoriteContact");

module.exports = {
  listContacts,
  getById,
  addContact,
  removeContact,
  updateContact,
  updateFavoriteContact,
};
