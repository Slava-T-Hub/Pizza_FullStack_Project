const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3010;
//=======================================================
const getAllOrdersRouter = require("./router/getAllOrders-router");
app.use("/getAllOrders", getAllOrdersRouter);
//=======================================================

//=======================================================
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log(`Server is connect to ${PORT}`);
});
