const fs = require("fs");
const dbStore = require("../models");
/*
*
* 
* Product Section
*
*
*/

async function db_getProductByCategory(category) {
    return await dbStore["MENU_ITEMs"].findAll({
      where: { mainCategory: category },
      include: [
        {
          model: dbStore["IMAGE_MAPPING"],
        },
      ],
    });
  }
  
  async function db_getAllProducts() {
    return await dbStore["MENU_ITEMs"].findAll({
      include: [
        {
          model: dbStore["IMAGE_MAPPING"],
        },
      ],
    });
  }
  
  async function db_productCategories() {
    return await dbStore["MENU_ITEMs"].findAll({
      attributes: ["mainCategory"],
      group: "mainCategory",
    });
  }
  
  async function db_categoryImage(categories) {
    return await dbStore["IMAGE_MAPPING"].findAll({
      attributes: [
        ["imagekey", "category"],
        ["imageurl", "image_url_key"]
      ],
      where: { imagekey: categories },
    });
  }
  
  
  async function db_addProductImage(fileId, name, category = "menuItem") {
    return await dbStore["IMAGE_MAPPING"].create({
      imagekey: category,
      imageurl: name,
      CDN_fileId: fileId,
    });
  }
  
  async function db_updateProductImage(
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
  
  async function db_addProduct(menuItemObj, imageTablerefId) {
    return await dbStore["MENU_ITEMs"].create({
      ...menuItemObj,
      rating: 5,
      itemImage: imageTablerefId,
    });
  }
  
  async function db_updateProduct(menuItemBody, menuItemId , imageId) {
    return await dbStore["MENU_ITEMs"].update({
      ...menuItemBody,
      rating: 5,
      itemImage: imageId,
    }, 
    {
      where: { id : menuItemId}
    });
  }
  
  async function db_getProductImage(imageId) {
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
  
  async function db_deleteProductImage(imageId) {
    return await dbStore["IMAGE_MAPPING"].destroy({
      where: { id: imageId }
    });
  }

  module.exports = {
    db_getProductByCategory,
    db_getAllProducts,
    db_productCategories,
    db_categoryImage,
    db_addProduct,
    db_addProductImage,
    db_updateProduct,
    db_updateProductImage,
    db_deleteProductImage,
    db_getProductImage
  };