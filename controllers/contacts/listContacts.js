const Contact = require("../../models/contact");

const listContacts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const { _id: owner } = req.user;
  const { favorite } = req.query;
  const query = { owner };
  if (favorite !== undefined) {
    query.favorite = favorite;
  }
  const result = await Contact.find(query, null, {
    skip,
    limit,
  }).populate("owner", "id subscription email");
  res.json(result);
};

module.exports = listContacts;
