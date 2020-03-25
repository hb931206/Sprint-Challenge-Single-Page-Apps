import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  const changeHandler = event => {
    setSearchTerm(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
  };

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${searchTerm}`
      )
      .then(response => {
        setData(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  useEffect(() => {
    const results = data.filter(result =>
      result.name.toLowerCase().includes(searchTerm)
    );

    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <label htmlFor="character"> </label>
      <input
        type="text"
        name="character"
        value={searchTerm}
        onChange={changeHandler}
        placeholder="Search Character"
      ></input>
      <ul>
        {searchResults.map(character => (
          <CharacterCard name={character.name} status={character.status} />
        ))}
      </ul>
    </div>
  );
}

export default SearchForm;
