import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>Requirements</h1>
      <br></br>
      <ul>
        <li>Pokémon information must be retrieved from PokéAPI. &#10004;</li>
        <li>The Pokédex must display a list of Pokémon and support simple pagination (e.g. “next” and “previous” buttons to get the next/previous page of Pokémon), such that not all Pokémon are displayed at the same time. &#10004;</li>
        <li>When a user clicks on a specific Pokémon, additional information about that Pokémon must be displayed. E.g. type(s), stats, abilities, height and weight. &#10004;</li>
        <li>The application must contain multiple pages (e.g. "pokedex" and "about") and utilize React Router to route between them. &#10004;</li>
        <li>The application must be developed using the Create React App toolchain. &#10004;</li>
      </ul>
      <br></br>
      <p>Assignment made by Kristians</p>
    </div>
  );
};

export default About;