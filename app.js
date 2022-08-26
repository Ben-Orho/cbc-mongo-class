const express = require("express");
const req = require("express/lib/request");
const router = require("./Routes/auth.route");
const app = express();

//In-Built Middleware
// enables you to get data from the body
app.use(express.json());
// this accept data inform of a form
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.all("*", (req, res) => {
  res.status(404).json({ msg: `Route not found` });
});

module.exports = app;
