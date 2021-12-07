const express = require('express');
const defautController = require('../controller/defaultController');

const router = express.Router();

router.get("/default", defautController.baseFunc);

module.exports = router;