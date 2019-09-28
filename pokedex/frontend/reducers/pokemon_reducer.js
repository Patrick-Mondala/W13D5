import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

//pokemonReducer
export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return action.pokemon
        default:
            return state;
    }
}