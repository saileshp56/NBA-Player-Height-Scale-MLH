import React from "react";
import silhouette from "../images/silhouette.png";

const Scale = (props) => {
  const toBeShown = props.playerArray?.map((player) => {
    return (
      <div style={{ float: "left", width: "150px" }}>
        <p>
          {player.name} <br /> {player.height_feet}'{player.height_inches}"
        </p>
        <img
          src={silhouette}
          height={(player.height_feet * 12 + player.height_inches) * 5 + 10}
          style={{ position: "absolute", bottom: "10px" }}
          onClick={() => {
            props.removeHandler(player.id);
          }}
        />
        {player.index !== 0 && (
          <button
            onClick={() => {
              props.leftHandler(player.index);
            }}
          >
            Move Left
          </button>
        )}
        {player.index !== props.arrayLength - 1 && (
          <button
            onClick={() => {
              props.rightHandler(player.index);
            }}
          >
            Move Right
          </button>
        )}
      </div>
    );
  });
  return <div>{toBeShown}</div>;
};

export default Scale;
