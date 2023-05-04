const express = require("express");
const ctrl = require("../../controllers/auth");
const { catchWrapper } = require("../../utils");
const { validation, authentication, upload } = require("../../middlewares");
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
  "/avatars",
  authentication,
  upload.single("avatar"),
  catchWrapper(ctrl.updateAvatar)
);

router.patch(
  "/",
  authentication,
  validation(schema.subscrSchema),
  catchWrapper(ctrl.subscription)
);

router.post(
  "/verify",
  validation(schema.emailVerify),
  catchWrapper(ctrl.resendEmail)
);

router.get("/verify/:verificationToken", catchWrapper(ctrl.verifyEmail));

module.exports = router;
