import React from "react";

const PlayerSelect = (props) => {
  const data = props.responseObj.data; //this is an array of objects

  const toBeShown = data?.map((player) => {
    if (player.height_feet === null) {
      return (
        <div
          style={{
            border: "1px solid black",
            width: "10%",
            height: "15vh",
            float: "left",
          }}
        >
          <p>
            {player.first_name} {player.last_name}
          </p>
          <p> Player's height could not be found</p>
        </div>
      );
    }

    return (
      <div
        style={{
          border: "1px solid black",
          width: "10%",
          height: "15vh",
          float: "left",
        }}
      >
        <p>
          {player.first_name} {player.last_name}
        </p>
        <p>{player.team.full_name}</p>
        <button
          onClick={() => {
            props.selectHandler(player);
          }}
        >
          Yes!
        </button>
      </div>
    );
  });

  return (
    <div>
      {data !== undefined && <h2>Is this your player?</h2>}
      {data !== undefined && toBeShown}
    </div>
  );
};

export default PlayerSelect;
