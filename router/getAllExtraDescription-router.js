const express = require("express");
const router = express.Router();
//=================================================================================
//=================================================================================
const getAllExtraDescriptionRouter = require("../controller/getAllExtraDescription-controller");
router.get("/api1", getAllExtraDescriptionRouter.getAllExtraDescription,);

//=================================================================================
//=================================================================================
//=================================================================================
module.exports = router;
