const button = document.querySelectorAll('.numbers');
const un = document.querySelector('.unique');
const display = document.querySelector('#display');
const equals = document.querySelector('#equals-btn');
const operator = document.querySelectorAll('.operator');
display.innerText = '';
const add = (num1,num2) =>{
    return num1+num2;
}
const subtract = (num1,num2) =>{
    return num1-num2;
}

const multiply = (num1,num2) =>{
    return num1*num2;
}

const divide = (num1,num2) =>{
    return num1/num2;
}
const operate = (operator,num1,num2) =>{
    switch(operator){
        case "+": add(num1,num2); break;
        case "-": subtract(num1,num2);break;
        case "/": divide(num1,num2);break;
        case "*": multiply(num1,num2);break;
    }
}
const clearDisplay = () => {
    display.innerText = '';
}
const updateDisplay = () =>{
    
   let displayValue;
   let displayValue2;
   let symbol = "+";
    buttonEvent();
    operatorEvent();
    equalsEvent();
    }
 
const buttonEvent = () => {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', e => {
            display.innerText += e.target.value;
        });
    }
}
const operatorEvent = () => {
    for (let j = 0; j < operator.length; j++) {
        operator[j].addEventListener('click', e => {
          displayValue = display.innerText;
         symbol =  e.target.value.toString();
         
            
      });
    }
}
const equalsEvent = () => {
    equals.addEventListener('click', e => {
        console.log("im being pressed");
        console.log(displayValue);
           // operate(symbol,displayValue,displayValue);
          });
}
updateDisplay();



