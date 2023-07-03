const events = require("events");
const fs = require("fs");
const rootEventEmitter = new events.EventEmitter();

rootEventEmitter.on("cleanupUploadFiles", async (fileName) => {
  // upload files will be cleaned up
  try {
    await deleteFileAsync(fileName);
  } catch (error) {
    console.log(error);
  }
});

function deleteFileAsync(fileName) {
  const filePath = `${process.cwd()}/uploads/${fileName}`;
  console.log("process", filePath);
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("error in delete file", err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  rootEventEmitter,
};
