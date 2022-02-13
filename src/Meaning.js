import React from "react";
import "./Dictionary.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning shadow-sm p-3 mb-5 rounded">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
            </p>
            <p>
              <strong>Example:</strong> <em>{definition.example}</em>
            </p>

            <Synonyms Synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
