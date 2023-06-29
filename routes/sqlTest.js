const express = require('express');
const testController = require('../controller/sqltestController');

const router = express.Router();

router.get("/sql", testController.test_v2);

module.exports = router;

///https://myfood.com/api/v1/menu/categories
