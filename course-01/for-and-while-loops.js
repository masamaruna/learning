// for loop

let loremIpsum =("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" +
    " industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" +
    " it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic" +
    " typesetting, remaining essentially unchanged.").split(" ");

for (let i = 0; i < loremIpsum.length; i++) {
    const loremMail = loremIpsum[i].toLowerCase() + "@gmail.com";

    console.log(i, loremMail);
}


// while loop v1

let num = Number(prompt("Give me a number"));
let startingNum = 1;
while (startingNum <= num) {
    console.log(startingNum);
    startingNum++; // adds one to the previous number
}


// while loop v2

const liElement = document.querySelector("#js-list-item");
let html = " ";

const numTwo = Number(prompt("give me a numebr"));
let startingNumTwo = 1;
while (startingNumTwo <= numTwo) {
    html = html + "<li>" + startingNumTwo + "</li>";
    startingNumTwo++;
}

liElement.innerHTML = html;