const dbConnect = require('../utils/db-connection');
const {
    SuccessResponse,
  } = require("../utils/apiResponse");

function baseFunc(req,res) {
  let carouselArray = [
    {name: " Urwashi", tech:"React"},
    {name: " Kunal", tech:"ProjectManag"},
    {name: " Kreya", tech:"None"}
  ]
  res.json({
    data:carouselArray
  });
}

module.exports = {
  baseFunc
}