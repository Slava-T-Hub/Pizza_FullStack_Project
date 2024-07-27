const express = require('express');
const router = express.Router();
const { getOrderDetails } = require('../controller/getOrderDetailsByCustomerId-Conrtroller');


router.get('/order-details', getOrderDetails);

module.exports = router;
