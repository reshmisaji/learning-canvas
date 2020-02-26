import React, { useState } from "react";
import "./App.css";
import { changeColor } from "./draw";
import "./draw";

const App = () => {
  const [currentColor, setCurrentColor] = useState("black");

  return (
    <div id="room">
      <canvas id="my-canvas" width="500px" height="500px"></canvas>
      <input
        type="color"
        id="palate"
        value={currentColor}
        onChange={event => {
          setCurrentColor(event.target.value);
          changeColor();
        }}
      />
      <img
        id="eraser"
        src="https://cdn.iconscout.com/icon/free/png-256/eraser-81-444685.png"
        width="30px"
        height="30px"
      />
    </div>
  );
};

export default App;
