const getAllpizzaDescriptionRepo = require("../DB/getAllPizzaDetails-repo");

const getAllpizzaDescription = async (req, res) => {
  try {
    let result = await getAllpizzaDescriptionRepo.getAllpizzaDescriptionStoredProcedure();
    res.json(result);
  } catch (err) {
    console.error("Error getting all orders", err);
    res.status(500).send("Error getting all orders");
  }
};


//==================================================================================

module.exports = {
    getAllpizzaDescription,
};
//==================================================================================
