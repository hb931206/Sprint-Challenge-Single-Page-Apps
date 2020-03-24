import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
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
          setCharacters(response.data.results);
          console.log(response, "response");
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getCharacters();
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return (
          <div>
            <Link>
              <CharacterCard name={character.name} status={character.status} />
            </Link>
          </div>
        );
      })}
    </section>
  );
}
