const { SuccessResponse } = require("../utils/apiResponse");
const {
  getMenuItemsFromDB,
  getAllMenuItemsFromDB,
  getCategories,
  getImagesForCategories
} = require('./SequlizeHelper');

async function getMenuCategories_v2(req, res) {
  try {
    let categories = await getCategories();
    categories = categories.map((item) => item["mainCategory"]);
    const categoriesWithImage = await getImagesForCategories(categories);
    SuccessResponse(res, categoriesWithImage);
  } catch (error) {
    console.log(err);
  }
}

async function getMenuItemsByCategory_v2(req, res) {
  try {
    const { category } = req.params;
    const menu_items = await getMenuItemsFromDB(category);
    SuccessResponse(res, menu_items);
  } catch (error) {
    console.log(error);
  }
}

async function getAllMenuItems_v2(req, res) {
  try {
    const menu_items = await getAllMenuItemsFromDB();
    SuccessResponse(res, menu_items);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getMenuCategories_v2,
  getMenuItemsByCategory_v2,
  getAllMenuItems_v2
};