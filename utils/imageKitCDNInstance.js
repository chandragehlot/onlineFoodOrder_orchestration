const config =  require("./config");
const ImageKit =  require("imagekit");

const { _publicKey, _privateKey, _urlEndpoint } = config.imageKitCDN;

const imageKitInstance = new ImageKit({
  publicKey: _publicKey,
  privateKey: _privateKey,
  urlEndpoint: _urlEndpoint,
});

module.exports = {
  imageKitInstance
}
