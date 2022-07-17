const axios = require('axios');
const { replaceKeyName } = require('../../utils/replaceKeyName');
const { isNumeric } = require('../../utils/isNumeric');
const {
    SWAPI_URL
} = require('../../config/config');


async function getPersonById(event) {
    try {
        const id = event.pathParameters.id;
        if (!isNumeric(id)) {
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
        let { data: person } = await axios.get(`${SWAPI_URL}people/${id}`);
        person = replaceKeyName(person);
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                    ...person
                },
                null,
                2
            )
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
    getPersonById
}