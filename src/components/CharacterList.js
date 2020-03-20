import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  const [character, setcharacter] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`
        )
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getCharacters();
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
