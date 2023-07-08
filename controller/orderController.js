const { SuccessResponse } = require("../utils/apiResponse");

function createOrder(req,res) {
    SuccessResponse(res, {
        "a": "a"
    });
}

function UpdateOrder(req, res) {
    SuccessResponse(res, {
        "a": "a"
    })
}

function softDeleteOrder(req, res) {
    SuccessResponse(res, {
        "a": "a"
    })
}

function getAllOrders(req, res) {
    SuccessResponse(res, {
        "a": "a"
    })
}

function getOrderByUser(req, res) {
    SuccessResponse(req, {
        "a": "a"
    })
}


module.exports = {
    createOrder,
    UpdateOrder,
    softDeleteOrder,
    getAllOrders,
    getOrderByUser
}
