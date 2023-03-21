let resultElem = document.querySelector("#result");
let arr = ['one', 'two', 'three', ['banana', 'apple', 'lemon'], 'four', 'five']; // an array inside an array, obviously

// console.log(arr[3][2]); // will only log the lemon object inside of an array inside of an array

for (const i in arr) {
    // console.log([i]);
    resultElem.innerHTML += '<br>' + i + ' ' + arr[i]; // changes the inner html into a line break + array object
    if (arr[i].constructor === Array) { // case-sensitive!! checks if it's an array
        console.log(i, arr[i]); // this logs only the array[3] inside of an array - because it is the only array
    }
}


// you can't loop through numbers and strings, but you can split them and loop through that array
// loops run until they don't


// vvv BASIC FOR LOOP EXAMPLE vvv //
for (let i = 0; i <= 20; i++) { // for the defined variable; where i is less or equal to 20 (or as long as); add one to i
    console.log(i);
}
//e.g.
let number = 0;
const sentence = "Hello my name is Masa and I like swimming in the sea";
for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i]);
    let letter = sentence[i].toLowerCase();
    if (letter === 'm') {
    number++;
    if (number === 3) { // we broke the loop at its fake maximum capacity of 3
        break;
    }
}}
console.log(number);


// vvv WHILE LOOP vvv //
// will run forever if not broken (does not increment for you)
// is going to check the condition first and then run if it's true
// will run 0+ times
let sthRandom = 4;
while (sthRandom <= 10) {
    console.log(sthRandom);
    sthRandom++;
}


// vvv DO WHILE LOOP vvv //
// will always execute code once and check to see if it's valid
// use it when you want the loop to run AT LEAST once
// will run 1+ times
let x = 10;
do {
    console.log(x);
    x++;
} while (x <= 20);
