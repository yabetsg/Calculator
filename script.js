const button = document.querySelectorAll(".numbers");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals-btn");
const operator = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear-btn");
display.innerText = "";
let firstNum = "";
let secondNum = "";
let operation = "";
let operationBtnCheck = false;
let equalBtnCheck = false;
let displayValue2 = 0;

const add = (num1, num2) => {
  return num1 + num2;
};
const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};
const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return Math.round(add(num1, num2) * 100) / 100;
    case "-":
      return Math.round(subtract(num1, num2) * 100) / 100;
    case "/":
      return Math.round(divide(num1, num2) * 100) / 100;
    case "*":
      return Math.round(multiply(num1, num2) * 100) / 100;
  }
};
const clearDisplay = () => {
  display.innerText = "";
};
const updateDisplay = () => {
  clearBtn.addEventListener("click", (e) => {
    firstNum = "";
    secondNum = "";
    operation = "";
    display.innerText = "";
    clearDisplay();
  });

  buttonEvent();
  operatorEvent();
  equalsEvent();
};

const buttonEvent = () => {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {
      if (button[i].value === "." && display.innerText.includes(".")) {
        button[i].classList.remove("numbers");
      } else if (
        button[i].value === "-" &&
        button[i].textContent == "-" &&
        display.innerText.includes("-")
      ) {
        button[i].classList.remove("numbers");
      } else if (
        button[i].value === "-" &&
        button[i].textContent == "+╱-" &&
        display.innerText === ""
      ) {
        display.innerText += e.target.value;
      } else if (button[i].value === "-" && button[i].textContent == "+╱-") {
        display.innerText = parseFloat(display.innerText) * -1;
      } else if (button[i].value === "%") {
        display.innerText = parseFloat(display.innerText) / 100;
      } else {
        display.innerText += e.target.value;
        operationBtnCheck = false;
        equalBtnCheck = true;
      }
    });
  }
};

const operatorEvent = () => {
  for (let j = 0; j < operator.length; j++) {
    operator[j].addEventListener("click", (e) => {
      symbol = e.target.value.toString();
      if (operationBtnCheck === false) {
        if (firstNum == "") {
          firstNum = display.innerText;
          operation = symbol;
          console.log(firstNum);
          console.log(operation);
          clearDisplay();
        } else {
          console.log(firstNum);
          secondNum = display.innerText;
          firstNum = operate(
            operation,
            parseFloat(firstNum),
            parseFloat(secondNum)
          );

          operation = symbol;
          display.innerText = firstNum;
          secondNum = "";
          clearDisplay();
        }
      }
      operationBtnCheck = true;
    });
  }
};

const equalsEvent = () => {
  equals.addEventListener("click", (e) => {
    symbol = e.target.value.toString();
    if (firstNum == "") {
      firstNum = display.innerText;
      operation = symbol;
    } else {
      secondNum = display.innerText;
      if (equalBtnCheck) {
        firstNum = operate(
          operation,
          parseFloat(firstNum),
          parseFloat(secondNum)
        );
      }
      if (firstNum.toString().includes("Infinity")) {
        firstNum = "You can't do that lol";
      }
      display.innerText = firstNum;
      secondNum = "";
      operation = "";
      firstNum = "";
      equalBtnCheck = false;
    }
  });
};

updateDisplay();
