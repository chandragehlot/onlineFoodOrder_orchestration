const axios = require("axios").default;
const fs = require("fs");

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

async function HitTOExternalAPI(item) {
  console.log("70000");
  try {
    const url = `http://localhost:4000/user?userId=${item}`;
    const response = await axios.get(url);
    console.log("6000", response.data);
    return response.data;
  } catch (error) {
    console.log("he mahaveer karo kalyan", response.data);
    console.error(error);
    return error.message;
  }
}

async function HandlerRecords(
  records = [],
  recordStatus,
  ExternalAsyncEntityHandler,
  startingIndex = 0
) {
  console.log("1005", records);
  for (let index = startingIndex; index < records.length; index++) {
    const record = records[index];
    try {
      const result = await ExternalAsyncEntityHandler(record);
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



function getUrlPath(url) {
  const splitArr = url.split('/');
  return splitArr[splitArr.length-1];
}

function removeUndefineItems(inputObj) {
  let outputObj = {};
  for (const key in inputObj) {
    const element = inputObj[key];
    outputObj = element ? { ...outputObj, [key]: element } : outputObj;
  }
  return outputObj;
}

const orderNumberGenerator = (function generateOrderNumber() {
  let incNumber = 1000000, orderNumber_slug = 'FBT', orderNumber;

  orderNumber = `${orderNumber_slug}${incNumber}`;

  function getNextOrderNumber() {
    increaseOrderNumber();
    return orderNumber;
  }

  function increaseOrderNumber() {
    incNumber = incNumber+1;
    orderNumber = `${orderNumber_slug}${incNumber}`;
  }
  return getNextOrderNumber
}());

module.exports = {
  createRecordSuccFailStore,
  HandlerRecords,
  HitTOExternalAPI,
  getUrlPath,
  removeUndefineItems,
  orderNumberGenerator
};
