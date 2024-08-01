const express = require("express");
const router = express.Router();
//=================================================================================
//=================================================================================
const getAlldrinkDescriptionRouter = require("../controller/getAlldrinkDescription-controller");
router.get("/api2", getAlldrinkDescriptionRouter.getAlldrinkDescription,);

//=================================================================================
//=================================================================================
//=================================================================================
module.exports = router;
