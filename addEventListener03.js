const textInput = document.querySelector("#js-input-field1");
const backgroundInput = document.querySelector("#js-input-field2");

const textButton = document.querySelector("#js-button-addon1");
const backgroundButton = document.querySelector("#js-button-addon2");

const textPlaceholder = document.querySelector("#js-text-placeholder");
const backgroundPlaceholder = document.querySelector("#js-background-placeholder");

const body = document.querySelector("body");


function changeTextColor() {
    console.log(textInput.value);
    body.style.color = textInput.value;
    textPlaceholder.innerHTML = textInput.value;
}

function changeBackgroundColor() {
    console.log(backgroundInput.value);
    body.style.backgroundColor = backgroundInput.value;
    backgroundPlaceholder.innerHTML = backgroundInput.value;
}


textInput.addEventListener('keyup', function(event) {
    console.log("hej", event);
    if(event.key === "Enter"){
        changeTextColor();
    }
});

backgroundInput.addEventListener('keyup', function(event) {
    console.log("hej", event);
    if(event.key === "Enter"){
        changeBackgroundColor();
    }
});


textButton.addEventListener('click', changeTextColor);

backgroundButton.addEventListener('click', changeBackgroundColor);