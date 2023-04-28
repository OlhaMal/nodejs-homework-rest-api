const { nanoid } = require("nanoid");

const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts");

const addContact = async (data) => {
  const allContacts = await listContacts();
  const newContact = { id: nanoid(), ...data };
  const newArr = [...allContacts, newContact]
  updateContacts(newArr)
  return newContact;
};

module.exports = addContact;
