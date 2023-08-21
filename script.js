function add(number1, number2){
    return number1 + number2
};
function subtract(number1, number2){
    return number1 - number2
};
function multiply(number1, number2){
    return number1 * number2
};
function divide(number1, number2){
    if (number2 === 0) {
        alert("Cannot divide by zero!")
        display.textContent = ""
        firstNum = undefined
        secondNum = undefined
        num1Turn = true;
        notFirstOperator = false;
        operatorClicked = false;;
        return "Error";
    }
    return number1 / number2
};
function operate (number1, number2, operators){
    if( isNaN(number1) && isNaN(number2)){
        alert("No number entered! press AC to continue")
        return "Error "
    }
    else if (isNaN(number1) && !isNaN(number2)){
        return number2
    }
    else if(isNaN(number2) && !isNaN(number1)){
        return number1
    }
    else{
    switch (operators) {
        case "+":
          return add(number1, number2)
        case "-":
          return subtract(number1, number2)
        case "*":
           return multiply(number1, number2)
        case "/":
          return divide(number1, number2)
        }}
}
let firstNum;
let secondNum;
let curOperator;
let num1Turn = true;
let notFirstOperator = false;
let operatorClicked = false; /**  checks for operator click to delete display after and add numbers
 */
let display = document.querySelector(".ongoing")
for (let button of document.querySelectorAll(".number")){
    button.addEventListener("click", function(){
        
        display.textContent = (operatorClicked)? button.textContent : display.textContent + button.textContent
        if (operatorClicked){
            operatorClicked = false};

        if (num1Turn === true){
            firstNum = parseFloat(display.textContent)
        }
        else{
            secondNum = parseFloat(display.textContent)
        }
    })
} 
let clearButton = document.getElementById("all-clear");
clearButton.addEventListener("click", function() {
    display.textContent = ""
    firstNum = undefined
    secondNum = undefined
    result.textContent = ""
    num1Turn = true;
    notFirstOperator = false;
    operatorClicked = false;

})

for (let operator of document.querySelectorAll(".operator")){
    operator.addEventListener("click", function(){
        if (isNaN(firstNum)){
            notFirstOperator = false;
            num1Turn = true
            return
        }
        if (notFirstOperator){
            result.textContent = operate(firstNum, secondNum, curOperator)
            firstNum = operate(firstNum, secondNum, curOperator)
            secondNum = undefined
            num1Turn = false
            curOperator = operator.id
            operatorClicked = true;
        }
        else{
        curOperator = operator.id
        operatorClicked = true;
        num1Turn = false
        notFirstOperator = true}
        

    })
} 
let equal = document.getElementById("equal")
let result = document.querySelector(".result")
const backspaceButton = document.getElementById("backspace");

backspaceButton.addEventListener("click", function() {
    if (operatorClicked) {
        display.textContent = firstNum.toString();
        operatorClicked = false; 
        notFirstOperator = false;  
    }

    if (display.textContent.length > 0) {
        display.textContent = display.textContent.slice(0, -1);
    }
    if (display.textContent === "") {
        display.textContent = "0";
    }

    let currentNumber = display.textContent.includes('.') ? parseFloat(display.textContent) : parseInt(display.textContent);

    if (num1Turn) {
        firstNum = currentNumber;
    } else {
        secondNum = currentNumber;
    }
});

equal.addEventListener("click", function(){ 
    result.textContent = operate(firstNum, secondNum, curOperator)
    firstNum = operate(firstNum, secondNum, curOperator)
    display.textContent = ""
    secondNum = undefined
    num1Turn = false
})
let percentage = document.getElementById("%")
percentage.addEventListener("click", function () {
    if (operatorClicked){
        return}
        if (typeof firstNum === "undefined") {
            return;
        }

        if (num1Turn) {
            firstNum /= 100;
            display.textContent = firstNum.toString();
            return;
        }
    
        switch (curOperator) {
            case "+":
            case "-":
                secondNum = firstNum * (secondNum / 100);
                break;
            case "*":
            case "/":
                secondNum /= 100;
                break;
        }
    
        display.textContent = secondNum.toString();
    });