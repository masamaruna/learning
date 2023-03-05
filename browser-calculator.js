let firstNum = 0;
let mathSymbol = "";

const inputField = document.querySelector("#enterMathProblem");
console.log(inputField.value);

const buttonOne = document.querySelector("#one");
buttonOne.addEventListener('click', function () {
    inputField.value = inputField.value + "1";
})

const buttonTwo = document.querySelector("#two");
buttonTwo.addEventListener('click', function () {
    inputField.value = inputField.value + "2";
})

const buttonThree = document.querySelector("#three");
buttonThree.addEventListener('click', function () {
    inputField.value = inputField.value + "3";
})

const buttonFour = document.querySelector("#four");
buttonFour.addEventListener('click', function () {
    inputField.value = inputField.value + "4";
})

const buttonFive = document.querySelector("#five");
buttonFive.addEventListener('click', function () {
    inputField.value = inputField.value + "5";
})

const buttonSix = document.querySelector("#six");
buttonSix.addEventListener('click', function () {
    inputField.value = inputField.value + "6";
})

const buttonSeven = document.querySelector("#seven");
buttonSeven.addEventListener('click', function () {
    inputField.value = inputField.value + "7";
})

const buttonEight = document.querySelector("#eight");
buttonEight.addEventListener('click', function () {
    inputField.value = inputField.value + "8";
})

const buttonNine = document.querySelector("#nine");
buttonNine.addEventListener('click', function () {
    inputField.value = inputField.value + "9";
})

const buttonZero = document.querySelector("#zero");
buttonZero.addEventListener('click', function () {
    inputField.value = inputField.value + "0";
})


const buttonPlus = document.querySelector("#plus");
buttonPlus.addEventListener('click', function () {
    firstNum = Number(inputField.value);
    inputField.value = "";
    mathSymbol = "plus";
})

const buttonMinus = document.querySelector("#minus");
buttonMinus.addEventListener('click', function () {
    firstNum = Number(inputField.value);
    inputField.value = "";
    mathSymbol = "minus";
})

const buttonDivide = document.querySelector("#divide");
buttonDivide.addEventListener('click', function () {
    firstNum = Number(inputField.value);
    inputField.value = "";
    mathSymbol = "divide";
})

const buttonMultiply = document.querySelector("#multiply");
buttonMultiply.addEventListener('click', function () {
    firstNum = Number(inputField.value);
    inputField.value = "";
    mathSymbol = "multiply";
})

const buttonSmajli = document.querySelector("#percentage");
buttonSmajli.addEventListener('click', function () {
    inputField.value = "whoops you lost everything :)";
})

const buttonReset = document.querySelector("#reset");
buttonReset.addEventListener('click', function () {
    inputField.value = "";
    firstNum = "";
})

const buttonEqual = document.querySelector("#equal");
buttonEqual.addEventListener('click', function () {
    let secondNum = Number(inputField.value);
    if (mathSymbol === "plus") {
        inputField.value = firstNum + secondNum;
    } else if (mathSymbol === "minus") {
        inputField.value = firstNum - secondNum;
    } else if (mathSymbol === "divide") {
        inputField.value = firstNum / secondNum;
    } else if (mathSymbol === "multiply") {
        inputField.value = firstNum * secondNum;
    } else {
        console.log("what did you do?");
    }
})
