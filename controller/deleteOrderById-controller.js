const { deleteOrderById } = require('../DB/deleteOrderById-repo');

async function deleteOrder(req, res) {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'Order ID is required' });
    }

    try {
        await deleteOrderById(parseInt(id, 10));
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete order' });
    }
}

module.exports = { deleteOrder };
