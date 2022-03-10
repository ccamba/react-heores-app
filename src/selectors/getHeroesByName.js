import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '' ) => {
  console.log('getHeroesByName called');

  if ( name.length === 0 ) {
      return [];
  }

  return heroes.filter( heroe => heroe.superhero.toLowerCase().includes( name.toLowerCase() ) );

}
