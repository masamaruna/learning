const magicNumber = 5;
const body = document.querySelector("body");

while (true) {
    const userInput = Number(prompt("Guess a number:"));
    if (userInput === magicNumber) {
        console.log("Correct number");
        body.style.backgroundColor = "black";
        body.style.color = "orange";
        body.innerHTML = "<h1>you have won!</h1>"
        break;
    } else {
        console.log("Incorrect number");
    }
}