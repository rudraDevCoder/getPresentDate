const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  dateFormat =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  response.send(dateFormat);
});

app.listen(3000);
module.exports = app;
