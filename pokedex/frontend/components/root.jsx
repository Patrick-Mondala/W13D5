import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from '../components/pokemon/pokemon_index_container';

//Root
export default ({ store }) => (
    <Provider store={store}>
        <h1>Pokedex shit</h1>
        <PokemonIndexContainer />
    </Provider>
);