// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const fs = require('fs');
// //var privateKey = fs.readFileSync('./jwt_token.key');
// var privateKey = 'thisisasecret';

// function createPwdHash(pwd) {
//   const saltRounds = 10;
//   return new Promise((resolve, reject) => {
//     try {
//       bcrypt.hash(pwd, saltRounds).then((hash) => {
//         console.log("hash", hash);
//         resolve(hash);
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// function comparePwdWithHash(pwd, hash) {
//   const saltRounds = 10;
//   return new Promise((resolve, reject) => {
//     try {
//       bcrypt.compare
//       bcrypt.compare(pwd, hash).then((matched) => {
//         console.log("hash", matched);
//         resolve(matched);
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// function signJWTToken(infoObj) {
//   // var privateKey = fs.readFileSync('./jwt_token.key');
//   var token = jwt.sign(infoObj, 'mysecret');
//   console.log("generated token",token);
//   return token;
// }

// function verifyJWTToken(token) {
//   console.log("4   =>", token)
//   const aaa = jwt.verify(token, 'mysecret')
//   console.log("5   =>", aaa);
  
// }

// module.exports = {
//     createPwdHash,
//     comparePwdWithHash,
//     signJWTToken,
//     verifyJWTToken
// }
