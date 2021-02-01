const API_URL = 'https://pokeapi.co/api/v2/';


// make an API call to 'PokeAPI'
 const apiCall = async ( endpoint, haveAPI = false ) => {

    let apiEndPoint = haveAPI ? endpoint : API_URL + endpoint ;

    return fetch( apiEndPoint)
        .then( res => res.json() );

}


// fetch all pokemons
export const fetchPokemons = async ( limit = 151, offset = 0 ) => {

    return apiCall( `pokemon?limit=${ limit }&offset=${ offset }` );

}


// fetch specific pokemon data 
export const fetchPokemonData = async ( id ) => {

    return apiCall( `pokemon/${ id }` );

}