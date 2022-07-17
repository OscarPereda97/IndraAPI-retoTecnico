'use strict';
//Films
const { getFilms } = require('./src/handlers/films/getFilms');
const { getFilmById } = require('./src/handlers/films/getFilmById');

//People
const { getPeople } = require('./src/handlers/people/getPeople');
const { getPersonById } = require('./src/handlers/people/getPersonById');

//Planets
const { getPlanets } = require('./src/handlers/planets/getPlanets');
const { getPlanetById } = require('./src/handlers/planets/getPlanetById');

//Species
const { getSpecies } = require('./src/handlers/species/getSpecies');
const { getSpeciesById } = require('./src/handlers/species/getSpeciesById');

//Starships
const { getStarships } = require('./src/handlers/starships/getStarships');
const { getStarshipById } = require('./src/handlers/starships/getStarshipById');

//Vehicles
const { getVehicles } = require('./src/handlers/vehicles/getVehicles');
const { getVehicleById } = require('./src/handlers/vehicles/getVehicleById');

//Clients
const { getClients } = require('./src/handlers/clients/getClients');
const { setClients } = require('./src/handlers/clients/setClients');

module.exports.getFilms = async (event) => {
  return getFilms(event);
};

module.exports.getFilmById = async (event) => {
  return getFilmById(event);
}

module.exports.getPeople = async (event) => {
  return getPeople(event);
};

module.exports.getPersonById = async (event) => {
  return getPersonById(event);
}

module.exports.getPlanets = async (event) => {
  return getPlanets(event);
};

module.exports.getPlanetById = async (event) => {
  return getPlanetById(event);
}

module.exports.getSpecies = async (event) => {
  return getSpecies(event);
};

module.exports.getSpeciesById = async (event) => {
  return getSpeciesById(event);
}

module.exports.getStarships = async (event) => {
  return getStarships(event);
};

module.exports.getStarshipById = async (event) => {
  return getStarshipById(event);
}

module.exports.getVehicles = async (event) => {
  return getVehicles(event);
};

module.exports.getVehicleById = async (event) => {
  return getVehicleById(event);
}

module.exports.getClients = async (event) => {
  return getClients(event);
}

module.exports.setClients = async (event) => {
  return setClients(event);
}