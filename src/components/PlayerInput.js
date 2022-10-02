import React from "react";
import { useRef, useState } from "react";
import axios from "axios";
import PlayerSelect from "./PlayerSelect";
const PlayerInput = (props) => {
  const playerNameInputRef = useRef();
  const [responseObj, setResponseObj] = useState({});

  function getUrl() {
    return `https://www.balldontlie.io/api/v1/players?search=${playerNameInputRef.current.value}`;
  }

  const searchHandler = async () => {
    const response = await axios.get(getUrl());
    //log(response.data); //pass this data to something that lets the user click if this is the right player

    setResponseObj(response.data);
  };

  return (
    <div>
      <p>First Name or Last Name</p>
      <input ref={playerNameInputRef} />
      <button onClick={searchHandler}>Search</button>
      <PlayerSelect
        responseObj={responseObj}
        selectHandler={props.selectHandler}
      />
    </div>
  );
};

export default PlayerInput;
