const dbStore = require("../models");

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
  
  async function getUesrFromDB(username){
    return await dbStore["USER"].findOne({ where: { userName: username }, raw: true });
  }
  
  async function addAddressToDB(fullName,phoneNumber,address1,address2,city,pincode,addresstype, user) {
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
        }
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
        ["imageurl", "image_url_key"],
      ],
      where: { "imagekey": categories },
    });
  }  


module.exports = {
    getUserAddressListFromDB,
    getUesrFromDB,
    addAddressToDB,
    getMenuItemsFromDB,
    getAllMenuItemsFromDB,
    getCategories,
    getImagesForCategories
}