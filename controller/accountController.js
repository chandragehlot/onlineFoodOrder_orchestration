const dbConnect = require("../utils/db-connection");
const { SuccessResponse, ValidationErrorResponse } = require("../utils/apiResponse");
const { comparePwdWithHash, createPwdHash, signJWTToken, verifyJWTToken } = require("../utils/bcrypt-util");


async function signUp(req, res) {
  try {
    const { userid, password, email } = req.body;
    const pwdHash = await createPwdHash(password);
    const userQuery = `INSERT INTO USER (userID, password, email) VALUES ('${userid}','${pwdHash}', '${email}')`;
    dbConnect
      .customQueryHandler(userQuery)
      .then(() => {
        const response = "user created successfully";
        SuccessResponse(res, response);
      })
      .catch((err) => {
        throw new Error(err);
      });
  } catch (error) {
    console.log(error);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const getUserQuery = `SELECT * FROM USER where email='${email}'`;
    const dbUserArr = await dbConnect.customQueryHandler(getUserQuery);
    const dbUser = dbUserArr[0];

    
    const ifPwdMatch = await comparePwdWithHash(password, dbUser.password);
    if (ifPwdMatch) {
      console.log("1  =>", dbUser);
      delete dbUser.password;
      console.log("2  =>", dbUser)
      const authToken = signJWTToken(dbUser);
      
      verifyJWTToken(authToken);
      SuccessResponse(res, { "token" : authToken, "loginStatus" : "loggedIn" });
    } else {
      throw Error("password incorrect");
    }
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

module.exports = {
  login,
  signUp,
};
