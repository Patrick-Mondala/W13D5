import React from 'react';

export default class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
        this.poke = this.poke.bind(this);
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    poke() {
        return (
            <ul>
                {this.props
                .pokemon.map(pokemon => (
                    <li key={pokemon.id}>
                        <h1>{pokemon.name}</h1>
                        <img className="poke-img"src={pokemon.image_url} />
                    </li>
                    ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <this.poke />
            </div>
        )
    }
}