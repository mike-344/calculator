function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function divide(a, b){
    return a / b;
}
function multiply(a, b){
    return a * b;
}

let first;
let second;
let operator;

function operate(oper, num1, num2){
    if (oper === "+"){
        return add(num1, num2)
    } else if (oper === "-"){
       return subtract(num1, num2)
    } else if( oper ==="*"){
       return multiply(num1, num2)
    } else if (oper === "/"){
       return divide(num1, num2)
    }
}
