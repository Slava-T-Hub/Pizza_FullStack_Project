const getAllOrdersRepo = require("../DB/getAllOrders-repo");

const getAllOrders = async (req, res) => {
  try {
    let result = await getAllOrdersRepo.getAllOrdersStoredProcedure();
    res.json(result);
  } catch (err) {
    console.error("Error getting all orders", err);
    res.status(500).send("Error getting all orders");
  }
};

module.exports = {
  getAllOrders,
};
//==================================================================================
