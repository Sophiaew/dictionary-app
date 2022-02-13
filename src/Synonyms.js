import React from "react";
import "./Dictionary.css";

export default function Synonyms(props) {
  if (props.Synonyms) {
    return (
      <div className="Synonyms">
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
