const axios = require('axios');
const { replaceKeyName } = require('../../utils/replaceKeyName');
const {
    SWAPI_URL
} = require('../../config/config');

async function getFilms(event) {
    try {
        let { data: peliculas } = await axios.get(`${SWAPI_URL}films`);
        peliculas = peliculas.results
        let newPeliculas = [];
        peliculas.map(pelicula => {
            let dataToPush = replaceKeyName(pelicula);
            newPeliculas.push(replaceKeyName(dataToPush))
        })
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                    ...newPeliculas
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
    getFilms
}