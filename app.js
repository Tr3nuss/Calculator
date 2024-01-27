//variables

const display = document.querySelector(".display-board");
const buttons = document.querySelectorAll(".calc-item");
const mathButtons = document.querySelectorAll(".calc-math-item");

//setting up button events

buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    let itemSymbol = e.target.textContent;

    if (itemSymbol !== "AC" && itemSymbol !== "C" && itemSymbol !== "=") {
      display.value = display.value + itemSymbol;
    }

    if (itemSymbol == "AC") display.value = "";
    if (itemSymbol == "C") display.value = display.value.slice(0, -1);

    if (itemSymbol == "=") {
      try {
        let inputValue = display.value;
        let result = new Function('"use strict";return (' + inputValue + ")")();
        display.value = result;
      } catch (error) {
        display.value = "Error";
      }
    }
  });
});

mathButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    let itemSymbol = e.target.textContent;

    switch (itemSymbol) {
      case "log":
        log();
        break;

      case "x²":
        pow();
        break;

      case "rnd":
        round();

      case "√":
        sqrt();
        break;

      case "n2":
        parce2();
        break;

      case "sin":
        sin();
        break;

      case "n8":
        parce8();
        break;

      case "cos":
        cos();
        break;

      case "n16":
        parce16();
        break;

      case "tan":
        tan();
        break;
    }
  });
});

//writing functions

const log = () => (display.value = Math.log(display.value));
const pow = () => (display.value = Math.pow(display.value, 2));
const round = () => (display.value = Math.round(display.value));
const sqrt = () => (display.value = Math.sqrt(display.value, 2));
const parce2 = () => (display.value = (+display.value).toString(2));
const sin = () => (display.value = Math.sin(display.value));
const parce8 = () => (display.value = (+display.value).toString(8));
const cos = () => (display.value = Math.cos(display.value));
const parce16 = () => (display.value = (+display.value).toString(16));
const tan = () => (display.value = Math.tan(display.value));
