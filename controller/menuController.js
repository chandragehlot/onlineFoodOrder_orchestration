const dbConnect = require('../utils/db-connection');
const {
    SuccessResponse,
  } = require("../utils/apiResponse");

const dbStore = require('../models')

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

async function getRestaurentInfo(req, res) {
  //console.log('dbStore', dbStore);
  // const restra = await dbStore['RESTAURENT'].findAll({});
  // const user_Address = await dbStore['USER_ADDRESS'].findAll({
  //   include: ['USER']
  // });

  // const users = await dbStore['USER'].findAll({
  //   include: ['USER_ADDRESSes']
  // }); 

  // const cart = await dbStore['CART'].findAll({
  //   include: [{
  //     model: dbStore['USER']
  //   }, {
  //     model: dbStore['CART_ITEMs'],
  //     include: [
  //       {
  //         model: dbStore['MENU_ITEM'],
  //         include: [{
  //           model: dbStore['IMAGE_MAPPING']
  //         }
  //         ]
  //       }
  //     ]
  //   }]
  // });

  const order = await dbStore['ORDER'].findAll({
    include: [{
      model: dbStore['ORDER_ITEMs'],
      include: [
        {
          model: dbStore['MENU_ITEMs'],
          include: [
            {
              model: dbStore['IMAGE_MAPPING']
            }
          ]
        }
      ]
    },
    {
      model: dbStore['USER']
    }]
  });

  const orderItems = await dbStore['ORDER_ITEMs'].findAll({});
  

  // const userWithCart = await dbStore['USER'].findAll({
  //   include: ['CART']
  // })

  // const cart_items = await dbStore['CART_ITEMs'].findAll({
  //   include: ['MENU_ITEM']
  // });



  // const menuItemsWithImages  =  await dbStore['MENU_ITEM'].findAll({
  //   include: ['IMAGE_MAPPING']
  // }); 

  // const images = await dbStore['IMAGE_MAPPING'].findAll({
  //   include: ['MENU_ITEM']
  // }); 
  //console.log("restra", restra);
  //console.log('user address', "user_Address");

  // SuccessResponse(res, {
  //   "restra" : "restra",
  //   "userAddress": "user_Address",
  //   "users": "users",
  //   "images": "images",
  //   "menu items": "menuItemsWithImages",
  //   "cart": "cart",
  //   "cart_items": "cart_items"
  // });

  SuccessResponse(res, {
    "userWithCart": "userWithCart",
    "cart": "cart",
    "order" : order,
    "orderItems": orderItems
  })
}

module.exports = {
    getMenuCategories,
    getMenuItemsByCategory,
    getAllMenuItems,
    getRestaurentInfo
}