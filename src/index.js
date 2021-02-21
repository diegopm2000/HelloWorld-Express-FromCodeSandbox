const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World Express, code created from codesandbox.io");
});

app.listen(8080);
