const express = require("express");
const app = express();
const cookieparser = require('cookie-parser');
//==========
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//==========
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
  res.send("Thank you for sigingup")
})
//====================================================LOGIN===
app.use((req, res, next) => {
  console.log('inside middleware, going to call refresh');
  let x = refresh(req, res);
  res.myStatusCode = x;
  next();
})
const { signIn, secretPage, refresh } = require('./controller/login-controller');
app.post('/signin', signIn);
app.get('/secretPage', secretPage);

//=======================================================
//=======================================================
app.use(express.static("public"));
//================================
const PORT = 3010;
//================================
app.listen(PORT, () => {
  console.log(`Server is connect to ${PORT}`);
});
