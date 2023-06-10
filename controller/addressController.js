const dbConnect = require("../utils/db-connection");
const { SuccessResponse } = require("../utils/apiResponse");

//   fullName: "",
//   phoneNumber: "",
//   address1: "",
//   address2: "",
//   city: "",
//   pincode: "",
//   addresstype: "",

async function addUserAddress(req, res) {
  const userAddress = req.body;
  const {
    fullName,
    phoneNumber,
    address1,
    address2,
    city,
    pincode,
    addresstype,
  } = userAddress;
  try {
    const addressQuery = `INSERT INTO USER_ADDRESS (fullName,phoneNumber,address1,address2,city,pincode,addresstype) VALUES (
            "${fullName}","${phoneNumber}","${address1}","${address2}","${city}","${pincode}","${addresstype}"
            )`;

    await dbConnect.customQueryHandler(addressQuery);
    SuccessResponse(res, {
      ...userAddress,
    });
  } catch (error) {
    console.log(error);
  }
}

async function getUserAddressList(req, res) {
  console.log("req coming here");
  try {
    const query = "SELECT * FROM USER_ADDRESS";
    const db_res = await dbConnect.customQueryHandler(query);
    SuccessResponse(res, {
      addressList: db_res,
    });
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  addUserAddress,
  getUserAddressList
};
