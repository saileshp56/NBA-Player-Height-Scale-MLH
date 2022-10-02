import logo from "./logo.svg";
import "./App.css";
import "axios";
import { useState } from "react";

import PlayerInput from "./components/PlayerInput";
import Scale from "./components/Scale";

const axios = require("axios");

function App() {
  const [players, setPlayers] = useState([]);

  const clickHandler = () => {};
  const selectHandler = (player) => {
    for (let i in players) {
      if (players[i].id == player.id) {
        return;
      }
    }

    setPlayers((prevPlayers) => {
      return [
        ...prevPlayers,
        {
          index: players.length, //gives you length + 1 for some reason
          id: player.id,
          name: `${player.first_name} ${player.last_name}`,
          height_feet: player.height_feet,
          height_inches: player.height_inches,
        },
      ];
    });
    //should add to an array that will get mapped against a scale
  };

  const removeHandler = (id) => {
    const arr = players.filter((player) => player.id !== id);
    const arr1 = [...arr];
    const arr2 = [];
    for (let i in arr1) {
      let player = arr1[i];
      player.index = parseInt(i);
      if (i == 0) {
        arr2.push(player);
      } else {
        arr2.push(player);
      }
    }
    setPlayers(arr2);
  };

  const leftHandler = (pos) => {
    const arr = [...players];
    let temp = arr[pos];
    let tempIndex1 = arr[pos].index;
    let tempIndex2 = arr[pos - 1].index;
    arr[pos] = arr[pos - 1];
    arr[pos].index = tempIndex1;

    arr[pos - 1] = temp;
    arr[pos - 1].index = tempIndex2;

    setPlayers(arr);
  };

  const rightHandler = (pos) => {
    const arr = [...players];
    let temp = arr[pos];
    let tempIndex1 = arr[pos].index;
    let tempIndex2 = arr[pos + 1].index;
    arr[pos] = arr[pos + 1];
    arr[pos].index = tempIndex1;

    arr[pos + 1] = temp;
    arr[pos + 1].index = tempIndex2;

    setPlayers(arr);
  };

  return (
    <div>
      <h1>NBA Player Height Comparison</h1>

      <PlayerInput selectHandler={selectHandler} clickHandler={clickHandler} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Scale
        removeHandler={removeHandler}
        leftHandler={leftHandler}
        rightHandler={rightHandler}
        playerArray={players}
        arrayLength={players.length}
      />
    </div>
  );
}

export default App;
