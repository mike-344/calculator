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

let first = "";
let second = "";
let operator = "";



const display = document.querySelector(".display")
const numButtons = document.querySelectorAll(".btn.num")
const operButtons = document.querySelectorAll(".btn.oper")
const equals = document.querySelector(".equals")


display.textContent = "0"


numButtons.forEach((button)=> {
    button.addEventListener("click", (e) => {

        
        if (first === "" && second === "" & operator === ""){
            display.textContent = ""
        }


        if (first !==  "" && operator !== ""){
            display.textContent = ""
        }

         if (first !== "" && operator !== ""){
            display.textContent += e.target.textContent
             second = +display.textContent
        } else {

        display.textContent += e.target.textContent
        first = +display.textContent
        }
       
    })
})


operButtons.forEach((button) =>   {
    button.addEventListener("click" , (e) => {
       operator = e.target.textContent;
       
    

    })
})


equals.addEventListener("click", () =>{
    display.textContent=operate(operator, first, second)

})


