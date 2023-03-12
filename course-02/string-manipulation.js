const sntnc = "I want to hold you underwater until the bubbles stop";

console.log(sntnc.toLowerCase());

console.log(sntnc.slice(0, 25));

console.log(sntnc.replace("you", "him"));

console.log(sntnc.substring(5, 37));

console.log(sntnc.toUpperCase());

console.log(sntnc.indexOf("underwater"));
console.log(sntnc.indexOf("hold"));
console.log(sntnc.indexOf("stop"));

console.log(sntnc.length);

let arr = sntnc.split(" ");
console.log(arr);
console.log(arr.length);
let joinedSntnc = arr.join(" + ");
console.log(joinedSntnc);