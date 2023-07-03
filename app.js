const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");

require("dotenv").config();

// create root level Event Emitter



const AddressRouteV2 = require('./routes/address_v2');
const MenuRouteV2 = require("./routes/menu_v2");
const SqlTestRoute = require("./routes/sqlTest");

var app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(logger("dev"));

app.get('/api/v2', (req,res) => {
  res.send("food delivery orchestration backend api version v2 working fine");
})
app.get('/api/v2/health-check', (req,res) => {
  res.send("food delivery orchestration backend api version v2 working fine");
})

app.use("/api/v2/address/", AddressRouteV2);
app.use("/api/v2/menu/", MenuRouteV2);
app.use("/api/v2/test/",SqlTestRoute);

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
