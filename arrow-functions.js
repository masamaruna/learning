greet = (name, weather) => `hello ${name}, this ${weather} weather is quite nice, isn't it?`;

const hello = greet("Leon", "sunny");
console.log(hello);

///////

const arr = ["JS", "PHP", "Python"];

arr.forEach(language =>{
    console.log(language);
});

///////

setTimeout(() => {
    console.log("waited");
}, 3000);