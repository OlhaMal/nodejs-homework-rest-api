const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const removeContact = async (id) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((e) => e.id === id);
  if (index === -1) {
    return null;
  }
  const result = allContacts.splice(index, 1);
  await updateContacts(allContacts);
  return result;
};

module.exports = removeContact;
