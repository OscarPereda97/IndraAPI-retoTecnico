const Sequelize = require('sequelize');
const {clients: clientEntities} = require('./models/client');
const {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USER
} = require('../config/config');


const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        dialect: 'mysql',
        host: DB_HOST,
        port: DB_PORT,
        logging: console.log
    }
);

const ClientEntity = clientEntities(sequelize, Sequelize);
const Models = { ClientEntity };
const connection = {};



module.exports.models = async () => {
    if (connection.isConnected) {
        console.log('=> Using existing connection.');
        return sequelize;
    };
    await sequelize.sync();
    connection.isConnected = true;
    console.log('=> Created a new connection!.');
    
    if (!connection.isConnected) {
        await sequelize.authenticate();
        connection.isConnected = true;
        console.log('=> Created a new connection.');
    };
    return Models;
}
