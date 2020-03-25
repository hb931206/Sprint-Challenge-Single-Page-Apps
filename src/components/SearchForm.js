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
    const results = data.filter(result => {
      console.log(result, "result");
      result.name.includes(searchTerm);
    });

    setSearchResults(results);
  }, [searchTerm]);

  return (
    <form className="search-form">
      <label htmlFor="character"> </label>
      <input
        type="text"
        name="character"
        value={searchTerm}
        onChange={changeHandler}
        placeholder="Search Character"
      ></input>
      <ul>
        {searchResults.map(
          item => console.log(item, "item")
          // <li>{CharacterCard}</li>
        )}
      </ul>
    </form>
  );
}

export default SearchForm;
