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
    console.log('1001', recordStatus);
    await HandlerRecords(records, recordStatus,HitTOExternalAPI, 0);
    console.log('2000');
    const { successResults, failRecords} = recordStatus.getResutls();
    console.log('2001', successResults);
    console.log('2002', failRecords);
    //do whatever you want with success records and failure records
    //const hello = []



    // for (const item of records) {
    //   const apiResp = await HitTOExternalAPI(item);
    //   hello.push(apiResp);      
    // }


    // const apiResp = await HitTOExternalAPI(9090);
    // hello.push(apiResp);
    // console.log(8080, hello)
    // const hello = await HitTOExternalAPI(1001);
     SuccessResponse(res, { successResults, failRecords});
    
    //res.status(200).json(hello);
}

module.exports = {
  baseFunc,
  testBulkRecordsHanlder
}