const {
  db_createCartByUserId,
  db_createCartItemByCartId,
  db_getCartNCartItemsByUserId,
  db_updateCartItems,
  db_removeCartItemFromCart
} = require("../sequlize-layer/cart-helper");
const { SuccessResponse } = require("../utils/apiResponse");

async function createCart(req, res) {
  try {
    const { userId } = req.query;
    const dbRes = await db_createCartByUserId(userId);
    SuccessResponse(res, dbRes);
  } catch (error) {
    console.log(error);
  }
}

async function addItemInCart(req, res) {
  try {
    const cartItemObj = ({ cartId, itemId, noOfItems } = req.body);
    const dbRes = await db_createCartItemByCartId(cartItemObj);
    SuccessResponse(res, dbRes);
  } catch (error) {
    console.log(error);
  }
}

async function getCartAndCartItems(req, res) {
  try {
    const { userId } = req.query;
    const dbRes = await db_getCartNCartItemsByUserId(userId);
    SuccessResponse(res, dbRes);
  } catch (error) {
    console.log(error);
  }
}

async function updateCart(req, res) {
  try {
    const { cartItemId, noOfItems } = req.body;
    let dbRes;
    if(noOfItems > 0){
        console.log('avadh me', cartItemId);
        console.log('raam aaye h', noOfItems)
        dbRes = await db_updateCartItems(cartItemId, noOfItems);
    }else if(noOfItems === 0){
        dbRes = await db_removeCartItemFromCart(cartItemId);
    }
    SuccessResponse(res, dbRes);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createCart,
  addItemInCart,
  getCartAndCartItems,
  updateCart
};
