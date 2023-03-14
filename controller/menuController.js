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
      console.log('categories db res', categoriesDbRes);
      const mainCategories = getArrOfObjVals(categoriesDbRes, 'main_category');
      console.log('mainCategories', mainCategories);
      const categoryImgUrlQuery = `SELECT * FROM IMAGEMAPPING WHERE imagekey IN ('${mainCategories.join("','")}')`;
      console.log('categoryImgUrlQuery', categoryImgUrlQuery);
      const categoryImages = await dbConnect.customQueryHandler(categoryImgUrlQuery);
      console.log('categoryImages'. categoryImages);
      const response = mainCategories.map(category => {
        return {
          'category' : category,
          'image_url_key' : categoryImages.find(item=>item.imagekey === category).imageurl
        }
      })
  
      SuccessResponse(res,response);      
    } catch (error) {
      console.log(error);
    }
}

///https://myfood.com/api/v1/menu//menuitem/bycategory/north

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