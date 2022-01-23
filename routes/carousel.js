const express = require('express');
const carouselController = require('../controller/carouselController');

const router = express.Router();

router.get("/carousel", carouselController.baseFunc);

module.exports = router;