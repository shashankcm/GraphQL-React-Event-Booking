const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("Testing in port 4000");
});

app.listen(4000, () => {
  console.log("App listening on port 4000!");
});
