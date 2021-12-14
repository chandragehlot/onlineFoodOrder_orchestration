const dbConnect = require('../utils/db-connection');
const {
    SuccessResponse,
  } = require("../utils/apiResponse");

const getArrOfObjVals = (ipArr,key)=>{
    return ipArr.map(item =>item[key])
}

async function getMenuCategories(req,res) {
    try {
      const categoryQuery = 'SELECT main_category FROM MENUITEM GROUP BY main_category';
      const categoriesDbRes = await dbConnect.customQueryHandler(categoryQuery);
      const mainCategories = getArrOfObjVals(categoriesDbRes, 'main_category');
      const categoryImgUrlQuery = `SELECT * FROM imagemapping WHERE imagekey IN ('${mainCategories.join("','")}')`;
      const categoryImages = await dbConnect.customQueryHandler(categoryImgUrlQuery);
      const response = mainCategories.map(category => {
        return {
          'category' : category,
          'image_url_key' : categoryImages.find(item=>item.imagekey === category).imageurl
        }
      })
  
      SuccessResponse(res,response);      
    } catch (error) {
      console.log(err);
    }
}

function getMenuItemsByCategory(req,res) {
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