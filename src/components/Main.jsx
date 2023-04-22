import React from 'react';
import Card from './Card';
import Pokeinfo from './Pokeinfo';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [pokeDex, setPokeDex] = useState(null);

  const fetchPokemon = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    await Promise.all(res.data.results.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData(prevState => [...prevState, result.data].sort((a, b) => a.id - b.id));
    }));
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, [url]);

  const handlePrevClick = () => {
    setPokeData([]);
    setUrl(prevUrl);
  };

  const handleNextClick = () => {
    setPokeData([]);
    setUrl(nextUrl);
  };

  return (
    <div className="container">
      <div className="left-content">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Card pokemon={pokeData} infoPokemon={poke => setPokeDex(poke)} />
        )}
      </div>
      <div className="right-content">
        <Pokeinfo pokemon={pokeDex} />
      </div>
      <div className="btns">
        {prevUrl && (
          <button onClick={handlePrevClick}>
            Previous
          </button>
        )}
        {nextUrl && (
          <button onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Main;
