# IndraAPI

Bienvenido, aquí tenemos la documentación de uso de esta API realizada para el proceso de selección de Indra.
El endpoint base es el siguiente:
https://nmaywdilhd.execute-api.us-east-2.amazonaws.com/dev

## Parte 1: Endpoints de SWAPI
#####  GET */peliculas*
Obtiene todas las peliculas de Star Wars
##### GET */peliculas/:id*
Obtiene una película de Star Wars según su identificador
*Nota: Ingresar el "id" en la url para poder obtener la película deseada.* 
##### GET */personas*
Obtiene todos los personajes de Star Wars
##### GET */personas/:id*
Obtiene un personaje de Star Wars según su identificador
*Nota: Ingresar el "id" en la url para poder obtener al personaje deseado.* 
##### GET */planetas*
Obtiene todos los planetas de Star Wars
##### GET */planetas/:id*
Obtiene un planeta de Star Wars según su identificador
*Nota: Ingresar el "id" en la url para poder obtener el planeta deseado.* 
##### GET */especies*
Obtiene todas las especies de Star Wars
##### GET */especies/:id*
Obtiene una especie de Star Wars según su identificador
*Nota: Ingresar el "id" en la url para poder obtener la especie deseada* 
##### GET */naves*
Obtiene todas las naves de Star Wars
##### GET */naves/:id*
Obtiene una nave de Star Wars según su identificador
*Nota: Ingresar el "id" en la url para poder obtener la nave deseada* 
##### GET */vehiculos*
Obtiene todos los vehiculos de Star Wars
##### GET */vehiculos/:id*
Obtiene un vehículo de Star Wars según su identificador
*Nota: Ingresar el "id" en la url para poder obtener el vehículo deseado.* 

## Parte 2: Endpoints de modelo propio
##### GET */clientes*
Este endpoint obtiene todos los clientes previamente ingresados
##### POST */clientes*
Este endpoint añade un nuevo cliente

    body:{
	    "email": "string",
	    "firstName": "string",
	    "lastName": "string",
	    "age": "string",
	    "documentIdentification": "string"
    }
