const { requestError } = require("../utils/");

const validation = (shema) => {
  return (req, res, next) => {
    const { error } = shema.validate(req.body);
    if (error) {
      next(requestError(400, "missing field"));
    }
    next();
  };
};

module.exports = validation;
