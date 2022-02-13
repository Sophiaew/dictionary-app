import React from "react";

export default function Phonetics(props) {
  if (props.phonetic) {
    console.log(props.phonetic);
    return (
      <div className="Phonetics">
        <h3>{props.phonetic.text}</h3>
        <audio controls src={props.phonetic.audio}>
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  } else {
    return null;
  }
}

//<h3>{props.results.phonetics[0].text}</h3>
//  <audio controls src={props.results.phonetics[0].audio}>
//    Your browser does not support the audio element.
//   </audio>
