const { Schema } = require("mongoose");
const valEm = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/;
const valNum = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

const contactShema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Set email for contact"],
    match: valEm,
  },
  phone: {
    type: String,
    match: valNum,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = contactShema;
