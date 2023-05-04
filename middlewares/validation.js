const { requestError } = require("../utils/");

const validation = (shema) => {
  return (req, res, next) => {
    const { error } = shema.validate(req.body);
    if (error) {
      next(requestError(400, error.message));
    }
    next();
  };
};

module.exports = validation;
