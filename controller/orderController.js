const {
  db_addOrder,
  db_addOrderItems,
  db_updateOrderStatus,
  db_getAllOrders,
  db_getOrdersByUser,
} = require("../sequlize-layer/order-helper");
const { SuccessResponse } = require("../utils/apiResponse");
const { orderNumberGenerator } = require("../utils/reusable-methods");

async function createOrder(req, res) {
  const { userId, orderAddressId, orderItems, totalAmount } = req.body;

  const orderNumber = orderNumberGenerator();
  const orderStatus = "ordered";
  const orderPlaceTime = new Date();
  const orderDbRes = await db_addOrder({
    orderNumber,
    userId,
    totalAmount,
    orderStatus,
    orderPlaceTime,
    orderAddress: orderAddressId,
  });
  const { id } = orderDbRes;
  const orderItemArr = orderItems.map((item) => {
    return {
      ...item,
      orderId: id,
      totalPrice: parseInt(item.unitPrice) * parseInt(item.quantity),
    };
  });

  console.log("OrderItemArray", orderItemArr);
  const dbRes = await db_addOrderItems(orderItemArr);

  // Remove Item from Cart If orderItems present In the cart
  SuccessResponse(res, dbRes);
}

async function UpdateOrder(req, res) {
  const {
    orderStatus,
    orderId,
    userId,
    orderPrepareEmployee,
    orderDeliverEmployee,
  } = req.body;
  let dbRes;
  if (orderStatus === "inprogress") {
    // TODO
    // check if order Prepared Employee is a 'CHEF'
    dbRes = await db_updateOrderStatus(
      {
        orderStatus,
        orderPrepareEmployee, // current value three
      },
      orderId,
      userId
    );
  } else if (orderStatus === "dispatched") {
    // TODO
    // check if order delivery  Employee is a 'Delivry Person'
    dbRes = await db_updateOrderStatus(
      {
        orderStatus,
        orderDispatchTime: new Date(),
        orderDeliverEmployee,
      },
      orderId,
      userId
    );
  } else if (orderStatus === "delivered") {
    dbRes = await db_updateOrderStatus(
      {
        orderStatus: orderStatus,
        orderDeliveryTime: new Date(),
      },
      orderId,
      userId
    );
  }
  SuccessResponse(res, dbRes);
}

async function getAllOrders(req, res) {
  try {
    const dbRes = await db_getAllOrders();
    SuccessResponse(res, dbRes);
  } catch (error) {}
}

async function getOrdersByUser(req, res) {
  const { userId } = req.query;
  const dbRes = await db_getOrdersByUser(userId);
  SuccessResponse(res, dbRes);
}

module.exports = {
  createOrder,
  UpdateOrder,
  getAllOrders,
  getOrdersByUser,
};
