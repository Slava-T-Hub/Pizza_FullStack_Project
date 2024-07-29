const express = require('express');
const router = express.Router();
const { deleteOrder } = require('../controller/deleteOrderById-controller');

router.delete('/order', deleteOrder);

module.exports = router;
