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
      setOutput(0)
      return;
    }

    


    if ((Number(value) || value === "." || value === "0") && !operator) {
      console.log(value);
      setCurrentValue(currentValue ? currentValue + value : value);
      setOutput(currentValue);
    }
    if ((Number(value) || value === "." || value === "0") && operator) {
      console.log(value);
      setPreviousValue(previousValue ? previousValue + value : value);
      setOutput(previousValue);
    }

    if (value === "+" || value === "-" || value === "x" || value === "/") {
      setOperator(value);
    }

    if (value === "%"){
      setPreviousValue(Number(currentValue) * (Number(previousValue) / 100));
    }

    if (value === "=") {
      if (operator === "+") {
        setCurrentValue(Number(currentValue) + Number(previousValue));
      }
      if (operator === "-") {
        setCurrentValue(Number(currentValue) - Number(previousValue));
      }
      if (operator === "x") {
        setCurrentValue(Number(currentValue) * Number(previousValue));
      }
      if (operator === "/") {
        setCurrentValue(Number(currentValue) / Number(previousValue));
      }
      setPreviousValue(null);
      setOperator(null);
    }
  }

  return (
    <div className="App">
      <div className="App-output">
        <div className="App-output_header">
          <img className="App-logo" src="calci.png" alt="logo calci"></img>
          <a href="https://github.com/calci-lib">
            <img className="App-setting" src="setting.png" alt="setting"></img>
          </a>
        </div>
        <div className="App-output_display">
          {!operator ? currentValue : previousValue}
        </div>
      </div>
      <div className="App-input">
        <table className="App-input_table">
          <tr>
            <td id="clear" onClick={handlerClick}>
              C
            </td>
            <td id="percent" onClick={handlerClick}>
              %
            </td>
            <td id="divide" onClick={handlerClick}>
              /
            </td>
            <td
              id="multiply"
              onClick={handlerClick}
              style={{ fontWeight: 700 }}
            >
              x
            </td>
          </tr>
          <tr>
            <td id="seven" onClick={handlerClick}>
              7
            </td>
            <td id="eight" onClick={handlerClick}>
              8
            </td>
            <td id="nine" onClick={handlerClick}>
              9
            </td>
            <td id="subtract" onClick={handlerClick}>
              -
            </td>
          </tr>
          <tr>
            <td id="four" onClick={handlerClick}>
              4
            </td>
            <td id="five" onClick={handlerClick}>
              5
            </td>
            <td id="six" onClick={handlerClick}>
              6
            </td>
            <td id="add" onClick={handlerClick}>
              +
            </td>
          </tr>
          <tr>
            <td id="one" onClick={handlerClick}>
              1
            </td>
            <td id="two" onClick={handlerClick}>
              2
            </td>
            <td id="three" onClick={handlerClick}>
              3
            </td>
            <td
              id="equals"
              rowSpan={2}
              onClick={handlerClick}
              style={{ fontSize: "50px" }}
            >
              =
            </td>
          </tr>
          <tr>
            <td id="zero" onClick={handlerClick}>
              0
            </td>
            <td
              id="decimal"
              onClick={handlerClick}
              style={{ fontSize: "50px" }}
            >
              .
            </td>
            <td id="delete" onClick={handlerClick}>
              <img src="delete.png" alt="Delete"></img>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
