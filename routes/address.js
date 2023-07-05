const express = require('express');
const AddressController = require('../controller/addressController');

const router = express.Router();

router.get("/user/get", AddressController.getAddressList);
router.post("/user/add", AddressController.addAddress);
router.post("/user/update", AddressController.updateAddress);
router.get("/user/delete", AddressController.deleteAddress);

module.exports = router;