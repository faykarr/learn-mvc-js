const express = require("express");
const bodyParser = require("body-parser");

const db = require("./config/database");
const app = express();
const router = require("./routers/router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(express.static("public"));

// View engine ejs
app.set("view engine", "ejs");
// Set the views directory
app.set("views", "./views");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});