const { SuccessResponse } = require("../utils/apiResponse");

const {
  db_getProductByCategory,
  db_getAllProducts,
  db_productCategories,
  db_categoryImage,
  db_addProductImage,
  db_addProduct,
  db_updateProduct,
  db_updateProductImage,
  db_deleteProductImage,
  db_getProductImage,
} = require("../sequlize-layer/product-helper");

const { rootEventEmitter } = require("../utils/imageCleanUp");
const {
  CDN_updateImage,
  CDN_deleteImage,
  CDN_addImage,
} = require("../utils/imageKitCDNInstance");

async function getMenuCategories(req, res) {
  try {
    let categories = await db_productCategories();
    categories = categories.map((item) => item["mainCategory"]);
    const categoriesWithImage = await db_categoryImage(categories);
    SuccessResponse(res, categoriesWithImage);
  } catch (error) {
    console.log(err);
  }
}

async function getMenuItemsByCategory(req, res) {
  try {
    const { category } = req.params;
    const menu_items = await db_getProductByCategory(category);
    SuccessResponse(res, menu_items);
  } catch (error) {
    console.log(error);
  }
}

async function getAllMenuItems(req, res) {
  try {
    const menu_items = await db_getAllProducts();
    SuccessResponse(res, menu_items);
  } catch (error) {
    console.log(error);
  }
}

// req.file {
//   fieldname: 'itemImage',
//   originalname: 'visiting card 1.jpeg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   destination: 'uploads/',
//   filename: '22d2ea1f4fe1829d771381fc037a51a6',
//   path: 'uploads/22d2ea1f4fe1829d771381fc037a51a6',
//   size: 194087
// }

// cdn response {
//   fileId: '64a2e56106370748f2bfe5e3',
//   name: 'visiting_card_1_GCxIZ_3A2.jpeg',
//   size: 194087,
//   versionInfo: { id: '64a2e56106370748f2bfe5e3', name: 'Version 1' },
//   filePath: '/fooddelivery/visiting_card_1_GCxIZ_3A2.jpeg',
//   url: 'https://ik.imagekit.io/a6n7g8ldqgi/fooddelivery/visiting_card_1_GCxIZ_3A2.jpeg',
//   fileType: 'image',
//   height: 720,
//   width: 1280,
//   thumbnailUrl: 'https://ik.imagekit.io/a6n7g8ldqgi/tr:n-ik_ml_thumbnail/fooddelivery/visiting_card_1_GCxIZ_3A2.jpeg',
//   AITags: null
// }

function addMenuItem(req, res) {
  try {
    CDN_addImage(req.file)
      .then(async (cdnResponse) => {
        rootEventEmitter.emit("cleanupUploadFiles", req.file.filename);
        const { fileId, name } = cdnResponse;
        const imageTableRes = await db_addProductImage(fileId, name);
        const imageTablerefId = imageTableRes.id;
        const dbres = await db_addProduct(req.body, imageTablerefId);
        SuccessResponse(res, dbres);
      })
      .catch((err) => {
        throw new Error(err);
      });
  } catch (error) {
    console.log(error);
  }
}

async function updateMenuItem(req, res) {
  const { CDN_fileId, imageId, menuItemId } = req.body;
  try {
    if (req.file) {
      const cdnResponse = await CDN_updateImage(CDN_fileId, req.file);
      console.log("1005", cdnResponse);
      rootEventEmitter.emit("cleanupUploadFiles", req.file.filename);
      const { fileId, name } = cdnResponse;
      await db_updateProductImage(imageId, fileId, name);
    }
    const { name, foodtype, mainCategory, price, courseType, description } =
      req.body;
    const menuItemBody = {
      name,
      foodtype,
      mainCategory,
      price,
      courseType,
      description,
    };
    const dbres = await db_updateProduct(menuItemBody, menuItemId, imageId);
    SuccessResponse(res, {
      response: dbres,
    });
  } catch (error) {}
}

async function deleteMenuItem(req, res) {
  const { imageId } = req.query;
  console.log("1999", imageId);
  const result1 = await db_getProductImage(imageId);
  console.log("2000", result1);
  const { CDN_fileId } = result1;
  const deleteResult = await CDN_deleteImage(CDN_fileId);
  console.log("2001", deleteResult);
  if (deleteResult) {
    const result4 = await db_deleteProductImage(imageId);
    console.log("result4", result4);
    SuccessResponse(res, {
      response: "menu item deleted successfully",
    });
  }
}

module.exports = {
  getMenuCategories,
  getMenuItemsByCategory,
  getAllMenuItems,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
};
