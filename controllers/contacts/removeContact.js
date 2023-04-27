const contactsOperations = require("../../models/contacts");
const { NotFound } = require("http-errors");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);

  if (!result) {
    throw new NotFound(`Product with id-${contactId} not found`);
  }
  res.json({
    message: "contact has been deleted",
  });
};

module.exports = removeContact;
