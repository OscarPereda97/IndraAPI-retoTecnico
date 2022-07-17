const db = require('../../database/db');
const connectToDatabase = db.models;

getClients = async (event) => {
    try {
        const { ClientEntity } = await connectToDatabase();
        const clients = await ClientEntity.findAll();
        return {
            statusCode: 200,
            body: JSON.stringify(clients)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(
                {
                    message: error.message
                },
                null,
                2
            )
        };
    }
}

module.exports = {
    getClients
};