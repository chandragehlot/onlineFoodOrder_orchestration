// const { verifyJWTToken } = require('../utils/bcrypt-util')

// function verifyAuth(req, res, next) {
//     const jwtToken = req.body.token || req.query.token || req.headers["x-access-token"];
//     if (!jwtToken) {
//         throw Error("A token is required for authentication");
//     }
//     try {
//         const decodedInfo = verifyJWTToken(jwtToken);
//         req.user = decodedInfo;
//     } catch (error) {
//         console.log(error);
//         throw Error("invalid token")
//     }
//     return next();
// }

// module.exports = {
//     verifyAuth
// }
