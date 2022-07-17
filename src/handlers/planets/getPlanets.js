const axios = require('axios');
const { replaceKeyName } = require('../../utils/replaceKeyName');
const { isNumeric } = require('../../utils/isNumeric');
const {
    SWAPI_URL
} = require('../../config/config');

async function getPlanets(event) {
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
        let { data: planets } = await axios.get(`${SWAPI_URL}planets?page=${pagina}`);
        planets = planets.results
        let newPlanets = [];
        planets.map(planet => {
            let dataToPush = replaceKeyName(planet);
            newPlanets.push(replaceKeyName(dataToPush))
        })
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                    ...newPlanets
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
    getPlanets
}