const dbConnect = require('../utils/db-connection');
const {
    SuccessResponse,
  } = require("../utils/apiResponse");

const {     
  createRecordSuccFailStore,
  HandlerRecords,
  HitTOExternalAPI
} = require('../utils/reusable-methods');

function baseFunc(req,res) {
  dbConnect.customQueryHandler('SELECT * FROM USER').then((dbres)=>{
      SuccessResponse(res, dbres);
    }).catch((err)=>{
      console.log(err);
    });
}

const hello = (function () {
  let successResults = [];
  let failRecords = [];
  function updateSuccessResults(result) {
    successResults.push(result);
  }
  function updateFailResults(record) {
    failRecords.push(record);
  }
  function getResutls() {
    return {
      successResults,
      failRecords,
    };
  }
  return {
    updateFailResults,
    updateSuccessResults,
    getResutls,
  };
})();

async function testBulkRecordsHanlder(req, res) {
  // console.log('noore khoods');
    const records = req.body.records;
    console.log('1000', records);
    if(!records){
      res.end({
        'err': 'no records'
      });
    }
    const recordStatus = createRecordSuccFailStore();
    await HandlerRecords(records, recordStatus,HitTOExternalAPI, 0);
    const { successResults, failRecords} = recordStatus.getResutls();
    //do whatever you want with success records and failure records
     SuccessResponse(res, { successResults, failRecords});
}

module.exports = {
  baseFunc,
  testBulkRecordsHanlder
}