const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const updateContact = async (id, data) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((e) => e.id === id);
  if (index === -1) {
    return null;
  }
  let contact = allContacts[index];
  contact = { ...contact, ...data };
  const result = (allContacts[index] = contact);
  await updateContacts(allContacts);
  return result;
};

module.exports = updateContact;
