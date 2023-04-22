import { FastAverageColor } from 'fast-average-color';
import React, {useState, useEffect} from 'react';
import { getColorFromUrl } from '../utils/colorCalculator';

const Card = ({ pokemon, loading, infoPokemon }) => {
    const [colors, setColors] = useState([]);
  
    useEffect(() => {
      const fetchColors = async () => {
        const colorPromises = pokemon.map((item) => getColorFromUrl(item.sprites.front_default));
        const colorValues = await Promise.all(colorPromises);
        setColors(colorValues);
      };
  
      fetchColors();
    }, [pokemon]);
  
    return (
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {pokemon.map((item, index) => (
              <div
                className="card"
                style={{ backgroundColor: colors[index] }}
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <p>{item.id}</p>
                <img src={item.sprites.front_default} alt="item.id" />
                <h>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h>
              </div>
            ))}
          </>
        )}
      </>
    );
  };
  
  export default Card;
  