const dbConnect = require('../utils/db-connection');
const {
    SuccessResponse,
  } = require("../utils/apiResponse");

function baseFunc(req,res) {
  console.log('2', dbConnect.instance.query);
  
  dbConnect.instance.query('SELECT * FROM USER', (err, result) => {
      if (!err){
        console.log(err);
      } else {
        SuccessResponse(res, result);
      }
    });
}

module.exports = {
  baseFunc
}