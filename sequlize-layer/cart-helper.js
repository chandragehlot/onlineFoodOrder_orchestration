const dbStore = require("../models");

// async function db_getAllCarts(params) {}
// async function db_deleteCartByCartId(cartId) {}

async function db_createCartByUserId(userid) {
  return await dbStore["CART"].create({
    userId: userid
  });
}

async function db_createCartItemByCartId({cartId, itemId, noOfItems}) {
  return await dbStore["CART_ITEMs"].create({
    cartId: cartId,
    itemId: itemId,
    noOfItems: noOfItems,
  });
}

async function db_getCartNCartItemsByUserId(userid) {
  return await dbStore["CART"].findAll({
    include: [{
      model: dbStore['CART_ITEMs'],
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
    }],
    where: {
      userId: userid,
    },
  });
}

async function db_removeCartItemFromCart(cartItemId) {
  return await dbStore['CART_ITEMs'].destroy({
    where : {
      id : cartItemId
    }
  });  
}

async function db_updateCartItems(cartItemId, noOfItems) {
  return await dbStore['CART_ITEMs'].update({
      noOfItems: noOfItems
    },{
      where : {
        id : cartItemId
      }
    }
  );
}

module.exports = {
  db_getCartNCartItemsByUserId,
  db_createCartByUserId,
  db_createCartItemByCartId,
  db_removeCartItemFromCart,
  db_updateCartItems
};
