const dbStore = require("../models");

module.exports.db_addOrder = async (params)  => {
    const {orderNumber, userId, totalAmount, orderStatus, orderPlaceTime, orderAddress } = params;
    return await dbStore['ORDER'].create({
        orderNumber, 
        userId, 
        totalAmount, 
        orderStatus, 
        orderPlaceTime, 
        orderAddress
    })
}

module.exports.db_addOrderItems = async (orderItems) => {
    return await dbStore['ORDER_ITEMs'].bulkCreate(orderItems);
}

module.exports.db_updateOrderStatus = async (orderupdateobj, ordertableid, userid) => {
    return await dbStore['ORDER'].update(orderupdateobj,{
        where : {
          id: ordertableid,
          userId: userid
        }
      })
}

module.exports.db_getAllOrders = async () => {
    return await dbStore['ORDER'].findAll({})
}

module.exports.db_getOrdersByUser = async (userid) => {
    return await dbStore['ORDER'].findAll({
        where: {
            userId: userid
        }
    })
}
