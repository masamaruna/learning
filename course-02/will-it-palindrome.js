const userInput = document.querySelector("#userInput");
const btnSubmit = document.querySelector(".btnSubmit");
let answerElement = document.querySelector("#answer");

function CheckIfPalindrome () {
    let inputArr = Array.from(userInput.value);
    console.log(inputArr.join("").replaceAll(" ", ""));

    let revInputArr = inputArr.reverse();
    let revInput = revInputArr.join("");
    revInput = revInput.replaceAll(" ", "");
    console.log(revInput);

    if (userInput.value.replaceAll(" ", "").toLowerCase() === revInput.toLowerCase()) {
        console.log("yes");
        answerElement.innerHTML = "YES. YOU CAN BREATHE NOW.";
    } else {
        console.log("no");
        answerElement.innerHTML = "NO, IT IS NOT. YOU ARE NOT ALLOWED TO CHILL.";
    }
}

btnSubmit.addEventListener('click', CheckIfPalindrome);