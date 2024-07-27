const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');
const PORT = 3010;
//=======================================================
//=======================================================
const getAllOrdersRouter = require("./router/getAllOrders-router");
app.use("/getAllOrders", getAllOrdersRouter);
//=======================================================
const getOrderDetailsRouter = require('./router/getOrderDetailsByCustomerId-Router');
app.use(cors());
app.use('/api', getOrderDetailsRouter);
//=======================================================
//=======================================================
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log(`Server is connect to ${PORT}`);
});
