let resultElem = document.querySelector("#result");
let arr = ['one', 'two', 'three', ['banana', 'apple', 'lemon'], 'four', 'five']; // an array inside an array, obviously

// console.log(arr[3][2]); // will only log the lemon object inside of an array inside of an array

for (const i in arr) {
    // console.log([i]);
    resultElem.innerHTML += '<br>' + arr[i]; // changes the inner html into a line break + array object
    if (arr[i].constructor === Array) { // case-sensitive!! checks if it's an array
        console.log(arr[i]); // this logs only the array[3] inside of an array - because it is the only array
    }
}