const mssql = require("mssql");
require("dotenv").config();
//=======================================
const sqlConfig = {
  user: "Slava",
  password: "MyPass@word",
  database: "PizzaDB",
  server: "localhost",
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};
//=======================================

const appPool = new mssql.ConnectionPool(sqlConfig);

module.exports.appPool = appPool;

//=======================================
