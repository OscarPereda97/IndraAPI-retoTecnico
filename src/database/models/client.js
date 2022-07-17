const { DataTypes } = require("sequelize"); 
module.exports.clients = (sequelize) => {
    return sequelize.define('clients', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        age: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        documentIdentification: {
            type: DataTypes.STRING(8),
            allowNull: true,
        },
    }, {
        timestamps: true,
        freezeTableName: true,
    })
}