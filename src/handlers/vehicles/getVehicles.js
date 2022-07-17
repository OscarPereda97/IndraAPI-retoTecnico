const axios = require('axios');
const { replaceKeyName } = require('../../utils/replaceKeyName');
const { isNumeric } = require('../../utils/isNumeric');
const {
    SWAPI_URL
} = require('../../config/config');

async function getVehicles(event) {
    try {
        const pagina = event.queryStringParameters.pagina;
        if (!isNumeric(pagina)) {
            return {
                statusCode: 400,
                body: JSON.stringify(
                    {
                        message: "Invalid parameter"
                    },
                    null,
                    2
                )
            };  
        }
        let { data: vehicles } = await axios.get(`${SWAPI_URL}vehicles?page=${pagina}`);
        vehicles = vehicles.results
        let newVehicles = [];
        vehicles.map(person => {
            let dataToPush = replaceKeyName(person);
            newVehicles.push(replaceKeyName(dataToPush))
        })
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                    ...newVehicles
                },
                null,
                2
            ),
        };
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
    getVehicles
}