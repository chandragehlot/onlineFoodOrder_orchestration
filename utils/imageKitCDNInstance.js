const config =  require("./config");
const ImageKit =  require("imagekit");

const { _publicKey, _privateKey, _urlEndpoint } = config.imageKitCDN;

const imageKitInstance = new ImageKit({
  publicKey: _publicKey,
  privateKey: _privateKey,
  urlEndpoint: _urlEndpoint,
});

async function CDN_addImage(file) {
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

function CDN_deleteImage(fileId) {
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

async function CDN_updateImage(fileId, file) {
  try {
    await CDN_deleteImage(fileId);
    const imageKitResponse = await CDN_addImage(file);
    return imageKitResponse;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  CDN_addImage,
  CDN_updateImage,
  CDN_deleteImage
}
