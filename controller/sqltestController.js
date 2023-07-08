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

  // let categories = await dbStore['MENU_ITEMs'].findAll({ attributes: ['mainCategory'], group: 'mainCategory'});
  // categories = categories.map(item=> item['mainCategory'])
  // const categoriesWithImage = await dbStore['IMAGE_MAPPING'].findAll({ attributes: [['imagekey', 'category'], ['imageurl', 'image_url_key']] , where: { 'imagekey' : categories } });
  // SuccessResponse(res, {
  //   "restra" : "restra",
  //   "userAddress": "user_Address",
  //   "users": "users",
  //   "images": "images",
  //   "menu items": "menuItemsWithImages",
  //   "cart": "cart",
  //   "cart_items": "cart_items"
  // });

  // const userId = 1;
  // const addressId = 7;
  // // const address_delete = await dbStore["USER_ADDRESS"].destroy({
  // //   where: { id: addressId, userId: userId }
  // // });

  // const addressbody = {
  //   phoneNumber: undefined,
  //   address1: undefined,
  //   address2: undefined,
  //   city: undefined,
  //   pincode: "8888888",
  //   addresstype: "home",
  // };

  // let aa = {};
  // for (const key in addressbody) {
  //     const element = addressbody[key];
  //     console.log('element', element)
  //     aa = element ? { ...aa, [key] : element } : aa;
  // }

  // console.log(aa);

  // const addressUpdate_result = await dbStore["USER_ADDRESS"].update(
  //   {
  //     ...aa
  //   },
  //   {
  //     where: { id: addressId, userId: userId },
  //   }
  // );

  // SuccessResponse(res, {
  //   userWithCart: "userWithCart",
  //   cart: "cart",
  //   order: "order",
  //   orderItems: "orderItems",
  //   userAddress: "userAddress",
  //   user1: "user1",
  //   new_Uesr: "newUser",
  //   categories: "categories",
  //   categoriesWithImage: "categoriesWithImage",
  //   address_delete: "address_delete",
  //   addressUpdate_result: addressUpdate_result,
  // });



    // const c = await dbStore['CART'].create({
    //   userId: 2
    // });

    // const a = await dbStore['CART'].findAll({
    //   // include: ['CART_ITEMs']
    // });
    // const b = await dbStore['CART_ITEMs'].findAll({
    //   include: ['MENU_ITEM']
    // });

    // const a = await dbStore['CART_ITEMs'].create({
    //   cartId: 2,
    //   itemId: 6,
    //   noOfItems: 5
    // })

    // const b = await dbStore['CART_ITEMs'].findAll({
    //   // include: ['CART_ITEMs']
    // });

    // console.log("a", a);
    // console.log("b", b);
    // console.log("c", "c");



  //   async function db_getCartByUserId(userid) {
  //     return await dbStore['CART'].findOne({
  //         where: {
  //             userId: userid
  //         }
  //     })
  // }
  // async function db_getCartItemsByCartId(cartid) {
  //     return await dbStore['CART'].findAll({
  //         include: ['CART_ITEMs'],
  //         where: {
  //             id: cartid
  //         }
  //     })
  // }
  // async function db_createCartByUserId(userid) {
  //     return await dbStore['CART'].create({
  //         userId: userid
  //     })
  // }
  
  
  // async function db_createCartItemByCartId(cartItemObj) {
  //     return await dbStore['CART_ITEMs'].create({
  //         cartId : cartItemObj.cartId,
  //         itemId: cartItemObj.itemId,
  //         noOfItems: cartItemObj.noOfItems
  //     })
  // }

  // const a = await db_createCartByUserId(2);
  // const b = await db_createCartItemByCartId({
  //   cartId: 10,
  //   itemId: 5,
  //   noOfItems: 4
  // });
    // SuccessResponse(res, {
    //   "a": await db_getCartByUserId(2),
    //   "b": await db_getCartItemsByCartId(10)
    // })

    // Order Section
    // const params = {
    //   orderNumber: 'FBT0000001', 
    //   userId: 2, 
    //   totalAmount : 400, 
    //   orderStatus: 'ordered', 
    //   orderPlaceTime: new Date(),
    //   orderAddress: 2
    // }
    // const {orderNumber, userId, totalAmount, orderStatus, orderPlaceTime, orderAddress } = params;
    // const dbResOrder =  await dbStore['ORDER'].create({
    //     orderNumber, 
    //     userId, 
    //     totalAmount, 
    //     orderStatus, 
    //     orderPlaceTime, 
    //     orderAddress
    // })

    // SuccessResponse(res, dbResOrder)

    // const orderItems = [
    //   {
    //     "menuItemId": 2,
    //     "unitPrice": 300,
    //     "quantity": 3,
    //     "orderId": 2,
    //     "totalPrice": 900
    // },
    // {
    //     "menuItemId": 3,
    //     "quantity": 4,
    //     "unitPrice": 300,
    //     "orderId": 2,
    //     "totalPrice": 1200
    // }
    // ];

    // const dbResOrderItem = await dbStore['ORDER_ITEMs'].bulkCreate(orderItems);

    // SuccessResponse(res, dbResOrderItem)
    async function updateOrder(params) {
     return await dbStore['ORDER'].update({
        [params]: new Date()
      },{
        where : {
          id: 1
        }
      })
    }

    updateOrder('orderDeliveryTime').then((dbRes) => {
      console.log('res', dbRes);
      SuccessResponse(res, dbRes);
    }) 
}

// "a": a,
// "b": b,
// "d" : d

module.exports = {
  test_v2,
};
