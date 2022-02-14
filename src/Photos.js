import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <div className="Photos shadow-sm p-3 mb-5 rounded">
        <div className="row">
          {props.photos.map(function (photos, index) {
            return (
              <div className="col-md-4" key={index}>
                <a
                  href={photos.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="rounded img-fluid p-2"
                    src={photos.src.landscape}
                    alt={photos.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
