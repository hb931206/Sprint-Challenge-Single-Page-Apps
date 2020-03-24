import React, { useState, useEffect } from "react";

function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const changeHandler = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const result = props.characters.filter(character =>
      character.toLowerCase().includes(searchTerm)
    );
    setSearchResults(result);
  }, [searchTerm]);

  useEffect(() => {
    const searchChar = () => {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${searchTerm}`
        )
        .then(response => {
          console.log(response, "Form Response");
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    searchChar();
  }, []);

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
    </form>
  );
}

export default SearchForm;
