import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(keyword);
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
    </div>
  );
}
