const express = require("express");
const router = express.Router();
//=================================================================================
const getAllOrdersController = require("../controller/getAllOrders-conrtroller");
router.get("/", getAllOrdersController.getAllOrders);
//=================================================================================

//=================================================================================
module.exports = router;
