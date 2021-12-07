const dbConnect = require('../utils/db-connection');
const {
    SuccessResponse,
  } = require("../utils/apiResponse");

const getArrOfObjVals = (ipArr,key)=>{
    return ipArr.map(item =>item[key])
}

function getMenuCategories(req,res) {
  dbConnect.customQueryHandler('SELECT main_category FROM MENUITEM GROUP BY main_category').then((dbres)=>{
    const mainCategories = getArrOfObjVals(dbres, 'main_category');
    console.log('main cateeae', mainCategories);
    SuccessResponse(res,mainCategories);
    }).catch((err)=>{
      console.log(err);
    });
}

function getMenuItemsByCategory(req,res) {
    console.log("safsafas222",req.params);
    const { category } = req.params;
    const sqlQuery = `SELECT * FROM MENUITEM where main_category = '${category}'`;
    dbConnect.customQueryHandler(sqlQuery).then((dbres)=>{
        SuccessResponse(res, dbres);
      }).catch((err)=>{
        console.log(err);
      });
  }

function getAllMenuItems(req,res) {
    dbConnect.customQueryHandler('SELECT * FROM MENUITEM').then((dbres)=>{
        SuccessResponse(res, dbres);
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = {
    getMenuCategories,
    getMenuItemsByCategory,
    getAllMenuItems
}