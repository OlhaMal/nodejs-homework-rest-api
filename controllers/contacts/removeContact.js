const Contact = require("../../models/contact");
const { NotFound } = require("http-errors");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findByIdAndRemove({ owner, _id: contactId });

  if (!result) {
    throw new NotFound("Not found");
  }
  res.json({
    message: "contact has been deleted",
  });
};

module.exports = removeContact;
