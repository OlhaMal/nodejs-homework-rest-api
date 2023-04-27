const contactsOperations = require("../../models/contacts");

const listContacts = async (req, res) => {
  const result = await contactsOperations.listContacts();
  res.json(result);
};

module.exports = listContacts;
