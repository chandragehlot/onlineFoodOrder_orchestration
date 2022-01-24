
'user strict';

const mysql = require('mysql2');
const config = require('../utils/config.js');

class dbConnectSingleton {
    constructor(){
        this.instance;
    }

    connect(){
      console.log('chitthiye', config);
        const { host, user, password, database} = config.sqlDB;
        this.instance = mysql.createConnection({
            host,
            user,
            password,
            database
          });
          
          this.instance.connect(function(err) {
            if (err) throw err;
            console.log("MySql Database Connected!");
          });
    }

    customQueryHandler(sqlQuery){
      return new Promise((resolve, reject)=>{
        this.instance.query(sqlQuery, (err, result)=> {
          if(err){
            reject(err)
          } else {
            resolve(result);
          }
        });
      });
    }
}

dbConnect = new dbConnectSingleton();
module.exports  = dbConnect;