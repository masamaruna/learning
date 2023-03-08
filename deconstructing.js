const fullName = prompt("what is your full name?");

let [firstName, lastName] = fullName.split(" ");

console.log(firstName, " is the first name");
console.log(lastName, " is the last name");

// ^^^^^ destructuring arrays v1 ^^^^^

const arr = ["Leon", "Masa", "Jasminka", "Tomislav", "Meni", "Matej"];

let [leon, masa, jasminka, ...everythingRest] = arr;
console.log(everythingRest);


// ^^^^^ destructuring arrays  v2 ^^^^^

////////////////////////////////////////////////////////////////////////////


const person = {
    "name_of_the_breathing_pile_of_cells": "Masa", // an abnormally long var
    "age": 22,
    "willToLive": "NaN",
    "height": 420,
    "food": "pasta",
    "pet": "dog Meni",
}

let {
    name_of_the_breathing_pile_of_cells: name,
    // ^^ proof that you can change var names later on
    height,
    // ^^ how it looks if you don't change or add anything later
    color = "green",
    // ^^ you can also add properties afterwards this way
    ...rest
    // ^^ you can use rest to show additional properties
} = person;

console.log("Name is", name);
console.log("Height is", height);
console.log("Fav color is", color);
console.log(rest);


// ^^^^^ deconstructing objects ^^^^^