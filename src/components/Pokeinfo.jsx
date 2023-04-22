import React from 'react';

const Pokeinfo = ({ pokemon }) => {


    return (
        <>
        {
            (!pokemon) ? "" : (
                <>
                    <h1>{pokemon.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt=""/>
                    <div className='abilities'>
                        {
                            pokemon.abilities.map((poke) => {
                                return(
                                    <>
                                    <div className='group'>
                                        <h2>{poke.ability.name.charAt(0).toUpperCase() + poke.ability.name.slice(1)}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='base-stat'>
                        <h3>Base stats</h3>
                        {
                            pokemon.stats.map((poke) => {
                                return(
                                    <>
                                    <p>{poke.stat.name.charAt(0).toUpperCase() + poke.stat.name.slice(1)}: {poke.base_stat}</p>
                                    </>
                                )
                            
                            })
                        }
                    </div>
                    <div className='base-stat'>
                        <h3>Type(s)</h3>
                        {
                            pokemon.types.map((poke) => {
                                return(
                                    <>
                                    <p>{poke.type.name.charAt(0).toUpperCase() + poke.type.name.slice(1)}</p>
                                    </>
                                )
                                
                            })
                        }
                    </div>
                    <div className='base-stat'>
                        <h3>Biometrics</h3>
                        <p>Height: {pokemon.height}</p>
                        <p>Weight: {pokemon.weight}</p>
                    </div>
                </>
            )
        }
        </>
    )
}

export default Pokeinfo;