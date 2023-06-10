const express = require('express');
const AddressController = require('../controller/addressController');

const router = express.Router();

router.post("/addAddress", AddressController.addUserAddress);
router.get("/getAddressList", AddressController.getUserAddressList)


module.exports = router;