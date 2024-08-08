const postOrderRepo = require("../DB/postOrder-Repo");

const postOrderController = async (req, res) => {
  try {
    const {customerName, phoneNo, adress, selectPizza, pizzaPrice, selectExtras, extraPrice, selectDrinks, drinkPrice} = req.body;
    let result = await postOrderRepo.postOrderStoredProcedure(customerName, phoneNo, adress, selectPizza, pizzaPrice, selectExtras, extraPrice, selectDrinks, drinkPrice);
    res.json(result);
  } catch (err) {
    console.error("Error getting all orders", err);
    res.status(500).send("Error getting all orders");
  }
};
//==================================================================================
module.exports = {
    postOrderController,
};
//==================================================================================
