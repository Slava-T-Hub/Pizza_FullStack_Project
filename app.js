const express = require("express");
const app = express();
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
//==================
//=======================================================
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log(`Server is connect to ${PORT}`);
});
