const button = document.querySelectorAll('.numbers');
const un = document.querySelector('.unique');
const display = document.querySelector('#display');
const display2 = document.querySelector('#display2');
const equals = document.querySelector('#equals-btn');
const operator = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear-btn');
display.innerText = '';
let displayValue =[];
let first = '';
let second = '';
let op = '';
let flag = true;

let displayValue2 = 0;
   
const add = (   num1,num2) =>{
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
        case "+": return add(num1,num2); 
        case "-": return subtract(num1,num2);
        case "/": return divide(num1,num2);
        case "*": return multiply(num1,num2);
    }
}
const clearDisplay = () => {
    display.innerText = '';
}
const updateDisplay = () =>{
    
    
        clearBtn.addEventListener('click', e => {
            first = '';
            second = '';
            op = '';
            display2.innerText = '';
            clearDisplay();
        });
    
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
         
        symbol =  e.target.value.toString();
        if(first == ''){
             first=display.innerText;
             op=symbol;
             console.log(first);
             console.log(op);
             clearDisplay();
        }else{
            // if(first.length>0 && display.innerText != ''){
            //     clearDisplay();
            // }
            //clearDisplay();
            console.log(first); 
            second =display.innerText;
            
          
              
                 first = operate(op,parseInt(first),parseInt(second));
              
             op = symbol;
           // op = symbol;
            
            display.innerText = first;
            console.log(first);
            console.log(op)
            second = '';
            clearDisplay();
        }
     
           
          
      });
    }
}


const equalsEvent = () => {
    equals.addEventListener('click', e => {
        symbol = e.target.value.toString();
        if (first == '') {
            first = display.innerText;
            op = symbol;
        } else {
            second = display.innerText;
            first = operate(op, parseInt(first), parseInt(second));
            display.innerText = first;
            // display2.innerText = first;
            second = '';
            op = '';
            first = '';
    
        }
    });
}



updateDisplay();



