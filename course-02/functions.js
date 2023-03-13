function Addition(num1, num2) {
    return (num1 + num2) * num2 - num1;
}

const total1 = Addition(2, 45);
const total2 = Addition(3,  58);

console.log(total1 + total2);

//

function getName() {
    const name = document.querySelector("input").value;
    return(name);
}

function getFirstName() {
    let nameArr = getName().split(" ");
    return(nameArr[0]);
}

const firstName = getFirstName();
console.log(firstName);
