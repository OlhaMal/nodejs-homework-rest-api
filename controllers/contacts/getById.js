const { NotFound } = require("http-errors");

const Contact = require("../../models/contact");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.status(200).json(result);
};

module.exports = getById;
