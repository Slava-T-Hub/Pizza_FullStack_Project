const { getOrderDetailsByCustomerId } = require('../DB/getOrderDetailsById-Repo');

async function getOrderDetails(req, res) {
  const customerId = parseInt(req.query.id, 10);
  
  if (isNaN(customerId)) {
    return res.status(400).json({ error: 'Invalid customer ID' });
  }
  
  try {
    const data = await getOrderDetailsByCustomerId(customerId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { getOrderDetails };
