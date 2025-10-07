import React, { createContext, useContext, useState } from "react";
import './Color.css';

const MyContext = createContext("");

function Box() {
  const {
    name,
    color1, setColor1,
    color2, setColor2,
    color3, setColor3,
    fontSize, setFontSize,
    textColor, setTextColor
  } = useContext(MyContext);

  const changeAllColors = () => {
    setColor1(color1 === "red" ? "yellow" : "red");
    setColor2(color2 === "green" ? "pink" : "green");
    setColor3(color3 === "orange" ? "purple" : "orange");
  };

  const changeFontSize = () => {
    setFontSize(fontSize === "20px" ? "30px" : "20px");
  };

  const changeTextColor = () => {
    setTextColor(textColor === "white" ? "black" : "white");
  };

  return (
    <div>
      <div className="box1" style={{ backgroundColor: color1 }}>
        <h3 className="size" style={{ fontSize, color: textColor }}>
          {name}
        </h3>
        <button className="change" onClick={changeAllColors}>Change Background</button>
      </div>

      <div className="box2" style={{ backgroundColor: color2 }}>
        <h3 className="size" style={{ fontSize, color: textColor }}>
          {name}
        </h3>
        <button className="change" onClick={changeFontSize}>Change Font Size</button>
      </div>

      <div className="box3" style={{ backgroundColor: color3 }}>
        <h3 className="size" style={{ fontSize, color: textColor }}>
          {name}
        </h3>
        <button className="change" onClick={changeTextColor}>Change Text Color</button>
      </div>
    </div>
  );
}

function BoxContainer() {
  const [name] = useState("Savitha");
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("green");
  const [color3, setColor3] = useState("orange");
  const [fontSize, setFontSize] = useState("20px");
  const [textColor, setTextColor] = useState("white");

  return (
    <MyContext.Provider
      value={{
        name,
        color1, setColor1,
        color2, setColor2,
        color3, setColor3,
        fontSize, setFontSize,
        textColor, setTextColor
      }}
    >
      <Box />
    </MyContext.Provider>
  );
}

export default BoxContainer;
