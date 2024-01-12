import React, { useState } from "react";
import "./Calculator.css";

function Header({ id }) {
  const [style, setStyle] = useState(localStorage.getItem("styleOfCalculator"));

  style ? import(`./${style}.css`) : import("./Pale_Cornflower_Blue.css");

  const changeStyles = (style) => {
    localStorage.setItem("styleOfCalculator", style);
    setStyle(style);
    window.location.reload();
  };

  const stylesItems = [
    {
      id: "Your_Pink",
      backgroundColorDisplay: "#FFC2B3",
      colorDisplay: "#FF481A",
      backgroundColorInput: "#FF8E71",
      colorInput: "#FFFFFF",
    },
    {
      id: "Beauty_Bush",
      backgroundColorDisplay: "#F8B9B9",
      colorDisplay: "#ED4545",
      backgroundColorInput: "#F38181",
      colorInput: "#FFFFFF",
    },
    {
      id: "Sandy_Beach",
      backgroundColorDisplay: "#FADDB7",
      colorDisplay: "#F19927",
      backgroundColorInput: "#F5B461",
      colorInput: "#FFFFFF",
    },
    {
      id: "Apricot",
      backgroundColorDisplay: "#FFCDB3",
      colorDisplay: "#FF8B4C",
      backgroundColorInput: "#FFA372",
      colorInput: "#FFFFFF",
    },
    {
      id: "Light_Pink",
      backgroundColorDisplay: "#FAB7BE",
      colorDisplay: "#F45768",
      backgroundColorInput: "#F67280",
      colorInput: "#FFFFFF",
    },
    {
      id: "White_Ice",
      backgroundColorDisplay: "#D4F7E8",
      colorDisplay: "#67E4AE",
      backgroundColorInput: "#92ECC5",
      colorInput: "#FFFFFF",
    },
    {
      id: "Pale_Cornflower_Blue",
      backgroundColorDisplay: "#B3D8FF",
      colorDisplay: "#4CA5FF",
      backgroundColorInput: "#6EB6FF",
      colorInput: "#FFFFFF",
    },
    {
      id: "Viking",
      backgroundColorDisplay: "#C7E9EA",
      colorDisplay: "#46B7B9",
      backgroundColorInput: "#46B7B9",
      colorInput: "#FFFFFF",
    },
  ];

  function handlerShowMenu() {
    const menu = document.getElementById("Calculator-setting_menu");
    if (menu.style.display !== "none") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  return (
    <div className="Calculator-display_header">
      <p className="Calculator-display_logo">CALCI</p>
      <div className="Calculator-setting">
        <button className="Calculator-setting_button" onClick={handlerShowMenu}>
          <img src={`${style ? style : "Pale_Cornflower_Blue"}.png`} alt="setting" />
        </button>
      </div>
      <div style={{ display: "none" }} id={id}>
        <ul>
          {stylesItems.map((style) => {
            return (
              <li key={style.id} onClick={() => changeStyles(style.id)}>
                <span
                  style={{
                    backgroundColor: style.backgroundColorDisplay,
                    color: style.colorDisplay,
                  }}
                >
                  13579
                </span>
                <span
                  style={{
                    backgroundColor: style.backgroundColorInput,
                    color: style.colorInput,
                  }}
                >
                  -=+x/%
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function Calculator() {
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
      return
    }
    if ((Number(value) || value === "." || value === "0") && operator) {
      console.log(value);
      const newValue = previousValue ? previousValue + value : value;
      setPreviousValue(newValue);
      setOutput(newValue);
      return
    }

    if (value === "+" || value === "-" || value === "x" || value === "/") {
      setOperator(value);
      setOutput(value);
      return
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
      return
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
      return
    }

    if (
      (e.target.id === "delete" || e.target.alt === "Delete") &&
      (currentValue || previousValue)
    ) {
      console.log(currentValue);
      console.log(previousValue);
      if (!operator) {
        const newValue = currentValue.slice(0, -1);
        setCurrentValue(newValue);
        setOutput(newValue ? newValue : 0);
      } else {
        const newValue = previousValue.slice(0, -1);
        setPreviousValue(newValue);
        setOutput(newValue ? newValue : 0);
      }
    }
  }

  return (
    <div className="Calculator">
      <div className="Calculator-display">
        <Header id="Calculator-setting_menu" />
        <div className="Calculator-display_output">{output}</div>
      </div>
      <div className="Calculator-input">
        <table className="Calculator-input_table">
          <tbody>
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
              <td
                rowSpan={2}
                onClick={handlerClick}
                style={{ fontSize: "50px" }}
              >
                =
              </td>
            </tr>
            <tr>
              <td onClick={handlerClick}>0</td>
              <td onClick={handlerClick} style={{ fontSize: "50px" }}>
                .
              </td>
              <td id="delete" onClick={handlerClick}>
                <img src="delete.png" alt="Delete"></img>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        <a
          style={{ color: "grey" }}
          href="https://www.figma.com/community/file/963047319874958087/colorful-calculators"
          rel="noreferrer"
          target="_blank"
          onClick={(e) => {
            e.preventDefault(); // Це запобіжить переходу до URL відразу після кліка
          
            var url = e.target.href;
            var target = e.target.target;
          
            window.open(url, target);
          }}
        >
          Design
        </a>
    </div>
  );
}

export default Calculator;
