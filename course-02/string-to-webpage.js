let userInput = prompt("give ma a random set of words for a webpage");

let inputArray = userInput.split(" ");
console.log(inputArray);

let webUrl = "https://website.com/" + inputArray.join("-").toLowerCase();
console.log(webUrl);
