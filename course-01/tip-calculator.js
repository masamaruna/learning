const billAmountElement = document.querySelector("#billAmount");
const tipAmountElement = document.querySelector("#tipAmount");
const tipAmountDisplay = document.querySelector(".tip-amount");
const totalAmountDisplay = document.querySelector(".total-with-tip");

function calculate() {
    const billAmountInput = Number(billAmountElement.value);
    const tipAmountInput = Number(tipAmountElement.value);

    let tipAmount = (tipAmountInput / 100) * billAmountInput;
    console.log(tipAmount);

    let totalAmount = tipAmount + billAmountInput;
    console.log(totalAmount);

    tipAmountDisplay.innerHTML = "Total amount is: " + totalAmount;
    totalAmountDisplay.innerHTML = "Tip amount is: " + tipAmount;
}