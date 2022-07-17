const axios = require('axios');
const { replaceKeyName } = require('../../utils/replaceKeyName');
const { isNumeric } = require('../../utils/isNumeric');
const {
    SWAPI_URL
} = require('../../config/config');

async function getStarships(event) {
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
        let { data: starships } = await axios.get(`${SWAPI_URL}starships?page=${pagina}`);
        starships = starships.results
        let newStarships = [];
        starships.map(starship => {
            let dataToPush = replaceKeyName(starship);
            newStarships.push(replaceKeyName(dataToPush))
        })
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                    ...newStarships
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
    getStarships
}