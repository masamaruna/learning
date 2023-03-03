const isThereATip = prompt("Are you tipping? Yes/No only");
console.log(isThereATip);

function tipCalculator(amount, percentage) {
    return(percentage/100) * amount;
}

if (isThereATip.toLowerCase() === "yes") {
    let amount = prompt("What's the amount?");
    amount = Number(amount);

    let percentage = prompt("What's the percentage you're willing to give?");
    percentage = Number(percentage);

    let tipAmount = tipCalculator(amount, percentage);
    console.log(tipAmount);
} else if (isThereATip.toLowerCase() === "no") {
    console.log("You selected no tip");
} else {
    console.error("That's not a yes or a no.");
}