import React from "react";
import "./Dictionary.css";

export default function Synonyms(props) {
  if (props.Synonyms.length) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        {props.Synonyms.map(function (synonym, index) {
          return (
            <ul key={index}>
              <small> {synonym}</small>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
