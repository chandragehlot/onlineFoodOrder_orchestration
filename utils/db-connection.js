
'user strict';

const mysql = require('mysql2');

class dbConnectSingleton {
    constructor(){
        this.instance;
    }

    connect(){
        this.instance = mysql.createConnection({
            host     : '127.0.0.1',
            user     : 'root',
            password : 'Hello12345',
            database : 'ZAYKA_RESTAURENT'
          });
          
          this.instance.connect(function(err) {
            console.log("here");
            if (err) throw err;
            console.log("Database Connected!");
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