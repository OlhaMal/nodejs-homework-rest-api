const User = require("../../models/users");

const subscription = async (req, res) => {
  const { _if: owner } = req.user;
  const { subscription } = req.body;
  const result = await User.findByIdAndUpdate(
    owner,
    { subscription },
    { new: true }
  );
  res.json(result);
};

module.export = subscription;
