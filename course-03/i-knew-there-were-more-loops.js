/// 3z.rent coming in clutch for this one


/// for... in loop => iterate through objects

const gear = {
    type: "lens",
    brand: "Sigma",
    autofocus: true,
    mount: "Sony FE",
    thread: 77,
};

for (const properties in gear) {
    console.log(`${properties} : ${gear[properties]}`);
}


console.log("///////");


/// for... of loop => iterate through arrays, node-lists,...

const discounts = ["weekend", "duration", "partner"];

for (const value of discounts) {
    console.log(value);
}

console.log("///////");

const list = document.querySelectorAll("li");

for (const items of list) {
    console.log(items);
    items.addEventListener("click", function (a) {
        alert(a.target.innerHTML);
    })
}
