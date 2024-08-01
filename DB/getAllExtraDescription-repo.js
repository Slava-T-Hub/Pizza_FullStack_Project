const connectToDB = require("./connectToDB");
const appPool = connectToDB.appPool;

//===============================================================
//===============================================================
const getAllExtraDescriptionStoredProcedure = async () => {
  try {
    const connectToPoolDB = await appPool.connect();
    try {
      let result = await connectToPoolDB.request()
      .execute("getAllExtraDescription");
      return result.recordset;
    } catch (err) {
      console.error("Error executing query", err);
      throw err;
    }
  } catch (err) {
    console.error("Error connecting to database", err);
    throw err;
  }
};



  module.exports = {
    getAllExtraDescriptionStoredProcedure, 
  };
  //===============================================================
