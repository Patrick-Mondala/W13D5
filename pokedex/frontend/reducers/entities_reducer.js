import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';

//entitiesReducer
export default combineReducers({
    pokemon: pokemonReducer
});