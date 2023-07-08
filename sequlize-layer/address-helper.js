const dbStore = require("../models");
const { removeUndefineItems } = require("../utils/reusable-methods");

/*
 *
 *
 * Address Section
 *
 *
 */

async function db_getAddressList(username) {
  return await dbStore["USER"].findOne({
    where: { userName: username },
    include: [
      {
        model: dbStore["USER_ADDRESS"],
      },
    ],
  });
}

async function db_getUesr(username) {
  return await dbStore["USER"].findOne({
    where: { userName: username },
    raw: true,
  });
}

async function db_addAddress(
  fullName,
  phoneNumber,
  address1,
  address2,
  city,
  pincode,
  addresstype,
  user
) {
  const hello = {
    fullName: fullName,
    phoneNumber: phoneNumber,
    address1: address1,
    address2: address2,
    city: city,
    pincode: pincode,
    addresstype: addresstype,
    userId: user.id,
  };
  return await dbStore["USER_ADDRESS"].create(hello);
}

async function db_updateAddress(addressId, userId, addressbody) {
  const addressObj = removeUndefineItems(addressbody);
  return await dbStore["USER_ADDRESS"].update(addressObj, {
    where: { id: addressId, userId: userId },
  });
}

async function db_deleteAddress(userId, addressId) {
  return await dbStore["USER_ADDRESS"].destroy({
    where: { id: addressId, userId: userId },
  });
}

module.exports = {
  db_getAddressList,
  db_getUesr,
  db_addAddress,
  db_deleteAddress,
  db_updateAddress,
};
