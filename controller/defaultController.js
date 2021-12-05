const {
    SuccessResponse,
  } = require("../utils/apiResponse");

function baseFunc(req,res) {
  

  SuccessResponse(res, { 'default' : 'this is default response of api'});
}

module.exports = {
  baseFunc
}