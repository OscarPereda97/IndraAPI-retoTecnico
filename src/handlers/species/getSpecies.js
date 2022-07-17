const axios = require('axios');
const { replaceKeyName } = require('../../utils/replaceKeyName');
const { isNumeric } = require('../../utils/isNumeric');
const {
    SWAPI_URL
} = require('../../config/config');

async function getSpecies(event) {
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
        let { data: species } = await axios.get(`${SWAPI_URL}species?page=${pagina}`);
        species = species.results
        let newSpecies = [];
        species.map(specie => {
            let dataToPush = replaceKeyName(specie); 
            newSpecies.push(replaceKeyName(dataToPush))
        })
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                    ...newSpecies
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
    getSpecies
}