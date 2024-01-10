import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentValue, setCurrentValue] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [output, setOutput] = useState(0);

  function handlerClick(e) {
    const value = e.target.textContent;
    if (value === "C") {
      setCurrentValue(null);
      setPreviousValue(null);
      setOperator(null);
      setOutput(0);
      return;
    }

    if ((Number(value) || value === "." || value === "0") && !operator) {
      console.log(value);
      const newValue = currentValue ? currentValue + value : value;
      setCurrentValue(newValue);
      setOutput(newValue);
    }
    if ((Number(value) || value === "." || value === "0") && operator) {
      console.log(value);
      const newValue = previousValue ? previousValue + value : value;
      setPreviousValue(newValue);
      setOutput(newValue);
    }

    if (value === "+" || value === "-" || value === "x" || value === "/") {
      setOperator(value);
      setOutput(value);
    }

    if (value === "%") {
      if (previousValue) {
        const newValue = Number(currentValue) * (Number(previousValue) / 100);
        setPreviousValue(newValue);
        setOutput(newValue);
      } else {
        const newValue = Number(currentValue) / 100;
        setCurrentValue(newValue);
        setOutput(newValue);
      }
    }

    if (value === "=") {
      if (operator === "+") {
        const newValue = Number(currentValue) + Number(previousValue);
        setCurrentValue(newValue);
        setOutput(newValue);
      }
      if (operator === "-") {
        const newValue = Number(currentValue) - Number(previousValue);
        setCurrentValue(newValue);
        setOutput(newValue);
      }
      if (operator === "x") {
        const newValue = Number(currentValue) * Number(previousValue);
        setCurrentValue(newValue);
        setOutput(newValue);
      }
      if (operator === "/") {
        const newValue = Number(currentValue) / Number(previousValue);
        setCurrentValue(newValue);
        setOutput(newValue);
      }
      setPreviousValue(null);
      setOperator(null);
    }
  }

  return (
    <div className="App">
      <div className="App-output">
        <div className="App-output_header">
          <img className="App-logo" src="CALCI.png" alt="logo calci"></img>
          <a href="">
            <img className="App-setting" src="setting.png" alt="setting"></img>
          </a>
        </div>
        <div className="App-output_display">{output}</div>
      </div>
      <div className="App-input">
        <table className="App-input_table">
          <tr>
            <td onClick={handlerClick}>C</td>
            <td onClick={handlerClick}>%</td>
            <td onClick={handlerClick}>/</td>
            <td onClick={handlerClick} style={{ fontWeight: 700 }}>
              x
            </td>
          </tr>
          <tr>
            <td onClick={handlerClick}>7</td>
            <td onClick={handlerClick}>8</td>
            <td onClick={handlerClick}>9</td>
            <td onClick={handlerClick}>-</td>
          </tr>
          <tr>
            <td onClick={handlerClick}>4</td>
            <td onClick={handlerClick}>5</td>
            <td onClick={handlerClick}>6</td>
            <td onClick={handlerClick}>+</td>
          </tr>
          <tr>
            <td onClick={handlerClick}>1</td>
            <td onClick={handlerClick}>2</td>
            <td onClick={handlerClick}>3</td>
            <td rowSpan={2} onClick={handlerClick} style={{ fontSize: "50px" }}>
              =
            </td>
          </tr>
          <tr>
            <td onClick={handlerClick}>0</td>
            <td
              id="decimal"
              onClick={handlerClick}
              style={{ fontSize: "50px" }}
            >
              .
            </td>
            <td onClick={handlerClick}>
              <img src="delete.png" alt="Delete"></img>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
