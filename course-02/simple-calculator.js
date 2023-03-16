const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operationOption = document.querySelector("select");
const button = document.querySelector("button");
let placeholder = document.querySelector("div");

function calculation() {

    let operation;
    if (operationOption.value === "add") {
        operation = "+";
        console.log(operationOption.value, operation);
    } else if (operationOption.value === "minus") {
        operation = "-";
        console.log(operationOption.value, operation);
    } else if (operationOption.value === "divide") {
        operation = "/";
        console.log(operationOption.value, operation);
    } else {
        operation = "*";
        console.log(operationOption.value, operation);
    }

    // safely using eval by casting values into numbers, i am aware that it is evil but i like living on the edge (not really im usually always scared)
    let result = eval(Number(num1.value) + operation + Number(num2.value));
    console.log(result);
    placeholder.innerHTML = result;

}

button.addEventListener("click", calculation );



// console.log(num1.value, num2.value, operation.value)