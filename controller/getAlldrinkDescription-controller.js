const getAlldrinkDescriptionRepo = require("../DB/getAlldrinkDescription-repo");

const getAlldrinkDescription = async (req, res) => {
  try {
    let result = await getAlldrinkDescriptionRepo.getAlldrinkDescriptionStoredProcedure();
    res.json(result);
  } catch (err) {
    console.error("Error getting all orders", err);
    res.status(500).send("Error getting all orders");
  }
};


//==================================================================================

module.exports = {
    getAlldrinkDescription,
};
//==================================================================================
