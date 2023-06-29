const express = require('express');
const AddressController = require('../controller/addressController');

const router = express.Router();

router.get("/getAllAddressForUser", AddressController.getUserAddressList_v2);
router.post("/addAddressForUser", AddressController.addUserAddress_v2);
router.get("/deleteAddressForUser", AddressController.deleteAddressForUser_v2);
router.post("/updateAddressForUser", AddressController.updateAddressForUser_v2);


module.exports = router;