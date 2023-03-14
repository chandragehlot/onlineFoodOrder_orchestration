const axios = require('axios').default;

function createRecordSuccFailStore() {
    return (function () {
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
}

async function HandlerRecords(records = [], recordStatus, ExternalAsyncEntityHandler, startingIndex = 0) {
    console.log('1005', records);
    for (let index = startingIndex; index < records.length; index++) {
      const record = records[index];
      try {
        console.log('1006', record);
        const result = await ExternalAsyncEntityHandler(record);
        console.log('1007', result);
        recordStatus.updateSuccessResults(result);
      } catch (e) {
        console.log(e);
        recordStatus.updateFailResults(record);
        // if(index <= records.length){
        //     console.log('calling recursion');
        //     HandlerRecords(records, recordStatus,ExternalAsyncEntityHandler, index); // recurrsion
        // }
      }
    }
  }


async function HitTOExternalAPI(item) {
    console.log('70000');
    try {
        const url = `http://localhost:4000/user?userId=${item}`;
        const response = await axios.get(url);
        console.log('6000', response.data);
        return response.data;
      } catch (error) {
        console.log('he mahaveer karo kalyan', response.data);
        console.error(error);
        return error.message;
      }
}

module.exports = {
createRecordSuccFailStore,
HandlerRecords,
HitTOExternalAPI
}