const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3010;

//=======================================================
//=======================================================
const getAllOrdersRouter = require("./router/getAllOrders-router");
app.use("/", getAllOrdersRouter);
//=======================================================
const getOrderDetailsRouter = require('./router/getOrderDetailsByCustomerId-Router');
app.use('/api', getOrderDetailsRouter);
//=======================================================
const deleteOrderRouter = require('./router/deleteOrderById-router');
app.use('/api', deleteOrderRouter);
//=======================================================
const getAllpizzaDescriptionRouter = require("./router/getAllPizzaDetails-router");
app.use("/", getAllpizzaDescriptionRouter);
//==================
const getAllExtraDescriptionRouter = require("./router/getAllExtraDescription-router");
app.use("/", getAllExtraDescriptionRouter);
//==================
const getAlldrinkDescriptionRouter = require("./router/getAlldrinkDescription-router");
app.use("/", getAlldrinkDescriptionRouter);
//=======================================================
app.post("/postOrder", (req, res) => {
  console.log
  (
    req.body.selectPizza,
    req.body.selectExtras,
    req.body.selectDrinks,
    req.body.customerName,
    req.body.phoneNo,
    req.body.adress,
   );
   res.send("Thank you for sigingup")
})
//======================================================cookie=

//=======================================================
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log(`Server is connect to ${PORT}`);
});
