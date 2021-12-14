const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
require("dotenv").config();

const DefaultRoute = require('./routes/default');
const MenuRoute = require('./routes/menu');
var app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(cors());
app.use(logger("dev"));

app.get('/api/v1/health-check', (req, res) => {
  res.send('food delivery orchestration backend api working fine');
})

app.use("/api/v1/menu", MenuRoute);
app.use("/api/v1", DefaultRoute);


module.exports = app;