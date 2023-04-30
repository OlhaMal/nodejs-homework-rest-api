const express = require("express");
const ctrl = require("../../controllers/contacts");
const { catchWrapper } = require("../../utils");
const { validation, authentication, validateId } = require("../../middlewares");
const schema = require("../../schemas");
const router = express.Router();

router.get("/", authentication, catchWrapper(ctrl.listContacts));

router.get(
  "/:contactId",
  authentication,
  validateId,
  catchWrapper(ctrl.getById)
);

router.post(
  "/",
  authentication,
  validation(schema.addShema),
  catchWrapper(ctrl.addContact)
);

router.delete("/:contactId", authentication, catchWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  authentication,
  validateId,
  validation(schema.updateShema),
  catchWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  authentication,
  validateId,
  validation(schema.favoriteSchema),
  catchWrapper(ctrl.updateFavoriteContact)
);

module.exports = router;
