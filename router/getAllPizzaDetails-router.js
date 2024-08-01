const express = require("express");
const router = express.Router();
//=================================================================================
//=================================================================================
const getAllpizzaDescriptionRouter = require("../controller/getAllPizzaDetails-controler");
router.get("/api", getAllpizzaDescriptionRouter.getAllpizzaDescription,);

//=================================================================================
//=================================================================================
//=================================================================================
module.exports = router;
