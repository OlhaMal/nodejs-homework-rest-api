const listContacts = require("./listContacts");

const getContactById = async (id) => {
  const allContacts = await listContacts();
  const contact = allContacts.find((e) => e.id === id);
  return contact || null;
};

module.exports = getContactById;
