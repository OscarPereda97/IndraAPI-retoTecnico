const db = require('../../database/db');
const sequelize = db.sequelize;
const connectToDatabase = db.models;

setClients = async (event) => {
    try {
        const { ClientEntity } = await connectToDatabase();
        const {
            email,
            firstName,
            lastName,
            age,
            documentIdentification
        } = JSON.parse(event.body);
        console.log(`__setClientsVariable: email=${email} - ${typeof email}`);
        console.log(`__setClientsVariable: firstName=${firstName} - ${typeof firstName}`);
        console.log(`__setClientsVariable: lastName=${lastName} - ${typeof lastName}`);
        console.log(`__setClientsVariable: age=${age} - ${typeof age}`);
        console.log(`__setClientsVariable: documentIdentification=${documentIdentification} - ${typeof documentIdentification}`);
        if(typeof email !== 'string'){
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "email not valid."
                })
            }
        }
        if(typeof firstName !== 'string' || typeof lastName !== 'string'){
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "firstName or lastName not valid."
                })
            }
        }
        if(typeof age !== 'string'){
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "age not valid."
                })
            }
        }
        if(typeof documentIdentification !== 'string'){
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "documentIdentification not valid."
                })
            }
        }
        await ClientEntity.create({email, firstName, lastName, age, documentIdentification});
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "client created successfully!"
            })
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
    setClients
};