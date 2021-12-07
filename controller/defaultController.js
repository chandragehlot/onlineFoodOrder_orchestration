const dbConnect = require('../utils/db-connection');
const {
    SuccessResponse,
  } = require("../utils/apiResponse");

function baseFunc(req,res) {
  dbConnect.customQueryHandler('SELECT * FROM USER').then((dbres)=>{
      SuccessResponse(res, dbres);
    }).catch((err)=>{
      console.log(err);
    });
}

module.exports = {
  baseFunc
}