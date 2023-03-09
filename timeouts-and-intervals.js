const logging = setInterval(function () {
    console.log("Is your refrigerator running? Because I am.");
}, 1000);


setTimeout(function () {
    console.log("It's not.");
    clearInterval(logging);
}, 10000);