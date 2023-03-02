const textInput = document.querySelector("#js-input1");
const backgroundInput = document.querySelector("#js-input2");
const fontScale = document.querySelector("#js-input3");

const textPlaceholder = document.querySelector("#js-text-placeholder");
const backgroundPlaceholder = document.querySelector("#js-background-placeholder");
const sizePlaceholder = document.querySelector("#js-size-placeholder");

const body = document.querySelector("body");


textInput.addEventListener('keyup', function(event){
    body.style.color = event.target.value;
    textPlaceholder.innerHTML = event.target.value;
});

backgroundInput.addEventListener('keyup', function (event) {
    body.style.backgroundColor = event.target.value;
    backgroundPlaceholder.innerHTML = event.target.value;
});

fontScale.addEventListener('keyup', function (event) {
        let value = event.target.value;
        if (Number(value) <= 0) {
            value = 1;
        }
        body.style.fontSize = value + "px";
        sizePlaceholder.innerHTML = value + "px";
});