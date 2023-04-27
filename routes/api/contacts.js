const express = require("express");
const ctrl = require("../../controllers/contacts")
const {catchWrapper} = require("../../utils")
const {validation} = require("../../middlewares")
const schema = require("../../schemas")
const router = express.Router();

router.get("/", catchWrapper(ctrl.listContacts));

router.get("/:contactId", catchWrapper(ctrl.getById));

router.post("/", validation(schema.addShema), catchWrapper(ctrl.addContact));

router.delete("/:contactId", catchWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validation(schema.updateShema),
  catchWrapper(ctrl.updateContact)
);

module.exports = router;
