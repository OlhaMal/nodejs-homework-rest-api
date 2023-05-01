const Contact = require("../../models/contact");
const { NotFound } = require("http-errors");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findByIdAndUpdate(
    { _id: contactId, owner },
    req.body,
    {
      new: true,
    }
  );
  if (!result) {
    throw new NotFound("Not found");
  }
  res.status(200).json(result);
};

module.exports = updateContact;
