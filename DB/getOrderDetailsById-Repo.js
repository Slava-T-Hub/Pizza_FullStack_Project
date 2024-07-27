const mssql = require('mssql');
const { appPool } = require('./connectToDB');

async function getOrderDetailsByCustomerId(customerId) {
  try {
    const pool = await appPool.connect();
    

    const result = await pool.request()
      .input('CustomerId', mssql.Int, customerId)
      .execute('getOrderDetailsByCustomerId');
    
    return result.recordset;
  } catch (err) {
    console.error('Database query error:', err);
    throw err;
  }
}

module.exports = { getOrderDetailsByCustomerId };
