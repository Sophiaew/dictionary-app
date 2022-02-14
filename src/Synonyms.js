import React from "react";
import "./Dictionary.css";

export default function Synonyms(props) {
  if (props.Synonyms.length) {
    return (
      <div>
        <strong>Synonyms: </strong>
        <ul className="Synonyms">
          {props.Synonyms.map(function (synonym, index) {
            return (
              <small>
                <li key={index}>{synonym}</li>
              </small>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
