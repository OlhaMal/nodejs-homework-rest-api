const User = require("../../models/users");
const bcrypt = require("bcrypt");
const { requestError } = require("../../utils");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const avatarUrl = gravatar.url(email);
  if (user) {
    requestError(409, "Email is already used");
  }
  const passwordHashed = await bcrypt.hash(password, 10);
  const result = await User.create({
    ...req.body,
    password: passwordHashed,
    avatarUrl,
  });
  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = register;
