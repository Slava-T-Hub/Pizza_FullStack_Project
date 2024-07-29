
const { appPool } = require('./connectToDB');
const mssql = require("mssql")

async function deleteOrderById(orderId) {
    try {
        await appPool.connect();
        const request = new mssql.Request(appPool);
        request.input('OrderId', mssql.Int, orderId);
        await request.execute('DeleteOrderById');
        console.log(`Order with ID ${orderId} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting order:', error);
        throw error;
    } finally {
        await appPool.close();
    }
}

module.exports = { deleteOrderById };
