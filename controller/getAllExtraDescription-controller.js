const getAllExtraDescriptionRepo = require("../DB/getAllExtraDescription-repo");

const getAllExtraDescription = async (req, res) => {
  try {
    let result = await getAllExtraDescriptionRepo.getAllExtraDescriptionStoredProcedure();
    res.json(result);
  } catch (err) {
    console.error("Error getting all orders", err);
    res.status(500).send("Error getting all orders");
  }
};


//==================================================================================

module.exports = {
    getAllExtraDescription,
};
//==================================================================================
