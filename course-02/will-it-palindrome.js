const userInput = document.querySelector("#userInput");
const btnSubmit = document.querySelector(".btnSubmit");
let answerElement = document.querySelector("#answer");

function PalindromeCheck(input) {

    input = input.toLowerCase();
    input = input.replaceAll(" ", "");

    let inputRev = Array.from(input);
    inputRev = inputRev.reverse();
    inputRev = inputRev.join("");

    return input === inputRev;
}

function ClickHandler () {

    const result = PalindromeCheck(userInput.value);

    if (result) {
        answerElement.innerHTML = "YES. YOU CAN BREATHE NOW.";
    } else {
        answerElement.innerHTML = "NO, IT IS NOT. YOU ARE NOT ALLOWED TO CHILL.";
    }
}

btnSubmit.addEventListener('click', ClickHandler);