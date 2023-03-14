const express = require('express');
const defautController = require('../controller/defaultController');
const { verifyAuth } = require('../middlewares');
const router = express.Router();

router.get("/default", verifyAuth, defautController.baseFunc);
router.post('/testBulkRecords', defautController.testBulkRecordsHanlder);

module.exports = router;