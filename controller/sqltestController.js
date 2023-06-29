const dbConnect = require("../utils/db-connection");
const { SuccessResponse } = require("../utils/apiResponse");
const dbStore = require("../models");

async function test_v2(req, res) {
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
  
    // const order = await dbStore['ORDER'].findAll({
    //   include: [{
    //     model: dbStore['ORDER_ITEMs'],
    //     include: [
    //       {
    //         model: dbStore['MENU_ITEMs'],
    //         include: [
    //           {
    //             model: dbStore['IMAGE_MAPPING']
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     model: dbStore['USER']
    //   }]
    // });
  
    // const orderItems = await dbStore['ORDER_ITEMs'].findAll({});
  
    // const userAddress = await dbStore["USER"].findAll({
    //   where: { userName: "UserId1" },
    //   include: [
    //     {
    //       model: dbStore["USER_ADDRESS"],
    //     },
    //   ],
    // });
  
    // const user1 = await dbStore["USER"].findOne();
    // console.log("user1", user1);
    // const newUser = await dbStore["USER_ADDRESS"].create({
    //   fullName: "username sirname 10",
    //   phoneNumber: "+91-4545454545-10",
    //   address1: "address line 12-10",
    //   address2: "address line 22-10",
    //   city: "city 2-10",
    //   pincode: "89898989-10",
    //   addresstype: "Office",
    //   userId: user1.id,
    // });
  
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

    let categories = await dbStore['MENU_ITEMs'].findAll({ attributes: ['mainCategory'], group: 'mainCategory'});
    categories = categories.map(item=> item['mainCategory'])
    const categoriesWithImage = await dbStore['IMAGE_MAPPING'].findAll({ attributes: [['imagekey', 'category'], ['imageurl', 'image_url_key']] , where: { 'imagekey' : categories } });
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
      userWithCart: "userWithCart",
      cart: "cart",
      order: "order",
      orderItems: "orderItems",
      userAddress: "userAddress",
      user1: "user1",
      new_Uesr: "newUser",
      categories: categories,
      categoriesWithImage: categoriesWithImage
    });
  }

  module.exports = {
    test_v2
  }