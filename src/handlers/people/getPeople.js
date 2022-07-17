const axios = require('axios');
const { replaceKeyName } = require('../../utils/replaceKeyName');
const { isNumeric } = require('../../utils/isNumeric');
const {
    SWAPI_URL
} = require('../../config/config');

async function getPeople(event) {
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
        let { data: people } = await axios.get(`${SWAPI_URL}people?page=${pagina}`);
        people = people.results
        let newPeople = [];
        people.map(person => {
            let dataToPush = replaceKeyName(person);
            newPeople.push(replaceKeyName(dataToPush))
        })
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                    ...newPeople
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
    getPeople
}