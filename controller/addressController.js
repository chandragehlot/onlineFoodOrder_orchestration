const { SuccessResponse } = require("../utils/apiResponse");


const {
  getUserAddressListFromDB,
  getUesrFromDB,
  addAddressToDB,
} = require("./SequlizeHelper");

async function addUserAddress_v2(req, res) {
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

  const user = await getUesrFromDB(username);
  const newAddress = await addAddressToDB(
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

async function getUserAddressList_v2(req, res) {
  try {
    const userName = req.query["userName"];
    const addressListResArr = await getUserAddressListFromDB(userName);
    SuccessResponse(res, {
      addressList: addressListResArr["USER_ADDRESSes"],
    });
  } catch (error) {
    console.log(error);
  }
}

function deleteAddressForUser_v2() {
  try {
    SuccessResponse(res, {
      a: "a",
    });
  } catch (error) {
    console.log(error);
  }
}

function updateAddressForUser_v2() {
  try {
    SuccessResponse(res, {
      a: "a",
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getUserAddressList_v2,
  addUserAddress_v2,
  deleteAddressForUser_v2,
  updateAddressForUser_v2,
};