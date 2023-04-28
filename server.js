const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST } = process.env;
mongoose.set("strictQuery", false);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
