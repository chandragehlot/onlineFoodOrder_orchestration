const bcrypt = require("bcrypt");

function createPwdHash(pwd) {
  const saltRounds = 10;
  return new Promise((resolve, reject) => {
    try {
      bcrypt.hash(pwd, saltRounds).then((hash) => {
        console.log("hash", hash);
        resolve(hash);
      });
    } catch (error) {
      reject(error);
    }
  });
}

function comparePwdWithHash(pwd, hash) {
  const saltRounds = 10;
  return new Promise((resolve, reject) => {
    try {
      bcrypt.compare(pwd, saltRounds).then((hash) => {
        console.log("hash", hash);
        resolve(hash);
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
    createPwdHash,
    comparePwdWithHash
}
