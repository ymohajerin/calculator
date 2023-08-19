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
    return number1 / number2
};
function operate (number1, number2, operators){
    switch (operators) {
        case "+":
          return add(number1, number2)
        case "-":
          return subtract(number1, number2)
        case "*":
           return multiply(number1, number2)
        case "/":
          return divide(number1, number2)
        }
}
let firstNum;
let secondNum;
let curOperator;
let num1Turn = true;
let operatorClicked = false /**  checks for operator click to delete display after and add numbers
 */
let display = document.querySelector(".ongoing")
for (let button of document.querySelectorAll(".number")){
    button.addEventListener("click", function(){
        
        display.textContent = (operatorClicked)? button.textContent : display.textContent + button.textContent
        if (operatorClicked){
            operatorClicked = false
        };

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
    firstNum = 0
    secondNum = 0
    result.textContent = ""
})

for (let operator of document.querySelectorAll(".operator")){
    operator.addEventListener("click", function(){
        curOperator = operator.id
        operatorClicked = true;
        num1Turn = !(num1Turn)

    })
} 
let equal = document.getElementById("equal")
let result = document.querySelector(".result")
equal.addEventListener("click", function(){ 
    result.textContent = operate(firstNum, secondNum, curOperator)
    display.textContent = ""
})