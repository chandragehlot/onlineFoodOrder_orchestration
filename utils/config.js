const baseConfig = {
    "local" : {
        "sqlDB" : {
            host     : '127.0.0.1',
            user     : 'root',
            password : 'Hello12345',
            database : 'ZAYKA_RESTAURENT'
        }
    },
    "uat" : {
        "sqlDB" : {
            host     : '127.0.0.1',
            user     : 'root',
            password : 'Hello@123',
            database : 'ZAYKA_RESTAURENT'
        }
    },
    "production" : {
        "sqlDB" : {
            host     : '',
            user     : '',
            password : '',
            database : ''
        }
    }
}

const env = process.env.ENV || 'local';

const config = baseConfig[env];

module.exports = config;
