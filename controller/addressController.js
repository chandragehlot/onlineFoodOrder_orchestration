const { SuccessResponse } = require("../utils/apiResponse");
const {
  db_getAddressList,
  db_getUesr,
  db_addAddress,
  db_deleteAddress,
  db_updateAddress
} = require("../sequlize-layer/address-helper");

async function addAddress(req, res) {
  const {
    fullName,
    phoneNumber,
    address1,
    address2,
    city,
    pincode,
    addresstype,
    username,
  } = req.body;

  const user = await db_getUesr(username);
  const newAddress = await db_addAddress(
    fullName,
    phoneNumber,
    address1,
    address2,
    city,
    pincode,
    addresstype,
    user
  );

  SuccessResponse(res, {
    new_address: newAddress,
  });
}

async function getAddressList(req, res) {
  try {
    const userName = req.query["userName"];
    const addressListResArr = await db_getAddressList(userName);
    SuccessResponse(res, {
      addressList: addressListResArr["USER_ADDRESSes"],
    });
  } catch (error) {
    console.log(error);
  }
}

function updateAddress(req,res) {
  console.log('coming here or not');
  try {
    const { addressId, userId, ...addressBody} = req.body;
    const dbRes = db_updateAddress(addressId, userId, addressBody);
    SuccessResponse(res, {
      "update_response": dbRes,
    });
  } catch (error) {
    console.log(error);
  }
}

async function deleteAddress(req, res) {
  try {
    const { userId, addressId } = req.query;
    const dbres = await db_deleteAddress(userId, addressId);
    SuccessResponse(res, {
      "delete_response" : dbres,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAddressList,
  addAddress,
  deleteAddress,
  updateAddress
};