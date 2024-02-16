
import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClearClick = () => {
    setInput("");
    setResult("");
  };

  const handleEqualsClick = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"].map(
          (item, index) => (
            <button
              key={index}
              onClick={() =>
                item === "=" ? handleEqualsClick() : handleButtonClick(item)
              }
            >
              {item}
            </button>
          )
        )}
        <button onClick={handleClearClick} className="clear">
          C
        </button>
      </div>
    </div>
  );
}

export default App;
