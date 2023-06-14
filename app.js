const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();

// const DefaultRoute = require("./routes/default");
const MenuRoute = require("./routes/menu");
const AddressRoute = require('./routes/address');

var app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(logger("dev"));


app.get("/api/v1/health-check", (req, res) => {
  res.send("food delivery orchestration backend api working fine");
});

app.use("/api/v1/menu/", MenuRoute);
app.use("/api/v1/address/", AddressRoute);
// app.use("/api/v1/", DefaultRoute);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log('error status', error.status);
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

module.exports = app;
