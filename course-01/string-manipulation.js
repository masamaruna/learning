const sentenceNode = document.getElementById("sentence");
const sentence = sentenceNode.innerHTML;

let sentenceUpper = sentence.toUpperCase(); // all letters uppercase
let sentenceLower = sentence.toLowerCase(); // all letters to lowercase
let firstElevenLetters = sentence.substring(0,11); // making a substring
let partOfChars = sentence.substring(5,10); // substring from a specific part

let allWords = sentence.split(" "); // automatically makes an array, numbers the words that are split by " "
let bracketWords = "(" + allWords.join(")(") + ")"; // joins words from array in brackets with concatenation

let firstThreeWords = allWords.slice(0,3); // just a part of the array (in this case words)

let randomWords = allWords.slice(5,10); // again part of the array
let makeSentence = randomWords.join(" "); // join them back with a spacer
sentenceNode.innerHTML = makeSentence; // replace the original sentence with the newly joined one