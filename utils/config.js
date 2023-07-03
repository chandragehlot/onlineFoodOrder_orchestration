const baseConfig = {
    "local" : {
        "sqlDB" : {
            host     : '127.0.0.1',
            user     : 'root',
            password : 'Hello12345',
            database : 'ZAYKA_RESTAURENT'
        },
        imageKitCDN: {
            _publicKey: 'public_sJv9+OpkGvY95CoCY/11LKv3XSQ=',
            _privateKey: 'private_nU7Cz5pdtKDE84QT84hR8HP79AA=',
            _urlEndpoint: 'https://ik.imagekit.io/a6n7g8ldqgi/'
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
