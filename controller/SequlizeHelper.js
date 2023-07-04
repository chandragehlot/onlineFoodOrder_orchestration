const fs = require("fs");
const dbStore = require("../models");
const { imageKitInstance } = require("../utils/imageKitCDNInstance");
const { removeUndefineItems } = require("../utils/reusable-methods");


/*
*
* 
* Address Section
*
*
*/

async function getUserAddressListFromDB(username) {
  return await dbStore["USER"].findOne({
    where: { userName: username },
    include: [
      {
        model: dbStore["USER_ADDRESS"],
      },
    ],
  });
}

async function getUesrFromDB(username) {
  return await dbStore["USER"].findOne({
    where: { userName: username },
    raw: true,
  });
}

async function addAddressToDB(
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

async function updateAddressInDb(addressId, userId, addressbody) {
  const addressObj = removeUndefineItems(addressbody);
  return await dbStore["USER_ADDRESS"].update(addressObj, {
    where: { id: addressId, userId: userId },
  });
}

async function deleteAddressInDb(userId, addressId) {
  return await dbStore["USER_ADDRESS"].destroy({
    where: { id: addressId, userId: userId },
  });
}


/*
*
* 
* Menu Section
*
*
*/

async function getMenuItemsFromDB(category) {
  return await dbStore["MENU_ITEMs"].findAll({
    where: { mainCategory: category },
    include: [
      {
        model: dbStore["IMAGE_MAPPING"],
      },
    ],
  });
}

async function getAllMenuItemsFromDB() {
  return await dbStore["MENU_ITEMs"].findAll({
    include: [
      {
        model: dbStore["IMAGE_MAPPING"],
      },
    ],
  });
}

async function getCategories() {
  return await dbStore["MENU_ITEMs"].findAll({
    attributes: ["mainCategory"],
    group: "mainCategory",
  });
}

async function getImagesForCategories(categories) {
  return await dbStore["IMAGE_MAPPING"].findAll({
    attributes: [
      ["imagekey", "category"],
      ["imageurl", "image_url_key"]
    ],
    where: { imagekey: categories },
  });
}


async function addMenuImageInDb(fileId, name, category = "menuItem") {
  return await dbStore["IMAGE_MAPPING"].create({
    imagekey: category,
    imageurl: name,
    CDN_fileId: fileId,
  });
}

async function updateMenuImageInDb(
  imageId,
  fileId,
  name,
  category = "menuItem"
) {
  return await dbStore["IMAGE_MAPPING"].update(
    {
      imagekey: category,
      imageurl: name,
      CDN_fileId: fileId,
    },
    {
      where: { id: imageId }
    }
  );
}

// name, foodtype, mainCategory, price, courseType, rating, description, itemImage

async function addMenuItemInDB(menuItemObj, imageTablerefId) {
  return await dbStore["MENU_ITEMs"].create({
    ...menuItemObj,
    rating: 5,
    itemImage: imageTablerefId,
  });
}

async function updateMenuItemInDB(menuItemBody, menuItemId , imageId) {
  return await dbStore["MENU_ITEMs"].update({
    ...menuItemBody,
    rating: 5,
    itemImage: imageId,
  }, 
  {
    where: { id : menuItemId}
  });
}

async function addMenuItemImageToCDN(file) {
  return new Promise((resolve, reject) => {
    const fileBuffer = fs.readFileSync(file.path);
    imageKitInstance.upload(
      {
        file: fileBuffer,
        fileName: file.originalname,
        folder: "fooddelivery",
      },
      function (err, response) {
        console.log("cdn response", response);
        if (err) {
          console.log("error in uploading file to CDN", err);
          reject(false);
        } else if (response) {
          console.log("response from image kit", response);
          resolve(response);
        }
      }
    );
  });
}

function deleteImageInCDN(fileId) {
  return new Promise((resolve, reject) => {
    imageKitInstance.deleteFile(fileId, (error, result) => {
      if (error) {
        console.log(error);
        reject(false);
      } else {
        console.log("result of image delete in cdm", result);
        resolve(true);
      }
    });
  });
}

async function updateImageInCDN(fileId, file) {
  try {
    await deleteImageInCDN(fileId);
    const imageKitResponse = await addMenuItemImageToCDN(file);
    return imageKitResponse;
  } catch (error) {
    console.log(error);
  }
}

async function getMenuImageFromDB(imageId) {
  return await dbStore["IMAGE_MAPPING"].findOne({
    attributes: [
      ["imagekey", "category"],
      ["imageurl", "image_url_key"],
      "CDN_fileId"
    ],
    where: { id: imageId },
    raw :true
  });
}

async function deleteMenuItemInDb(imageId) {
  return await dbStore["IMAGE_MAPPING"].destroy({
    where: { id: imageId }
  });
}

module.exports = {
  getUserAddressListFromDB,
  getUesrFromDB,
  addAddressToDB,
  getMenuItemsFromDB,
  getAllMenuItemsFromDB,
  getCategories,
  getImagesForCategories,
  deleteAddressInDb,
  updateAddressInDb,
  addMenuItemInDB,
  addMenuImageInDb,
  addMenuItemImageToCDN,
  updateImageInCDN,
  updateMenuItemInDB,
  updateMenuImageInDb,
  deleteMenuItemInDb,
  getMenuImageFromDB,
  deleteImageInCDN
};
