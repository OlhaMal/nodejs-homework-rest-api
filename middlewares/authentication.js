const User = require("../models/users");
const jwt = require("jsonwebtoken");
const { requestError } = require("../utils");
const { SECRET_KEY } = process.env;

const authentication = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(requestError(401));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    req.user = user;
    if (!user || !user.token || user.token !== token) {
      next(requestError(401));
    }
    next();
  } catch (error) {
    next(requestError(401));
  }
};

module.exports = authentication;
