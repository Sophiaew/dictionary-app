import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [wordData, setWordData] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setWordData({
      definition: response.data[0].meanings[0].definitions[0].definition,
    });
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
          placeholder="Type a word"
        />
        <input
          type="submit"
          className="btn btn-primary btn-sm ms-2 mb-1"
          value="Search"
        />
      </form>
      <Results definition={wordData.definition} />
    </div>
  );
}
