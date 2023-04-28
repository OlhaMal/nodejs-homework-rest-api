const Contact = require("../../models/contact");
const { NotFound } = require("http-errors");

const updateFavoriteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw new NotFound("Not found");
  }
  res.status(200).json(result);
};

module.exports = updateFavoriteContact;
