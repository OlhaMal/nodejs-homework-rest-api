const express = require("express");
const ctrl = require("../../controllers/auth");
const { catchWrapper } = require("../../utils");
const { validation, authentication } = require("../../middlewares");
const schema = require("../../schemas");

const router = express.Router();

router.post(
  "/register",
  validation(schema.registerSchema),
  catchWrapper(ctrl.register)
);

router.post("/login", validation(schema.loginSchema), catchWrapper(ctrl.login));

router.get("/current", authentication, catchWrapper(ctrl.getCurrent));

router.get("/logout", authentication, catchWrapper(ctrl.logout));

router.patch(
  "/",
  validation(schema.subscrSchema),
  catchWrapper(ctrl.subscription)
);

module.exports = router;
