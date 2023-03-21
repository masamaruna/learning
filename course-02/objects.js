

let person = {
    name: 'Laurie Bream',
    age: 40,
    tech: ['Pied Piper', 'Gates of Galoo', 'YaoNetUS'],
    changeAge: function (newAge) {
        this.age = Number(newAge);
        return this;
    },
    changeName: function (newName) {
        this.name = newName;
        return this;
    }
}
document.querySelector("#result").innerHTML = `${person.name} is ${person.age} years old and has unsuccessfully invested in ${person.tech.join(", ")}.`;
console.log(person);
// this gets executed by default parameters because the new ones were redefined later via functions

person.changeName('Monica Hall').changeAge(30);
document.querySelector("#result2").innerHTML = `${person.name} is ${person.age} years old and has successfully invested in ${person.tech.join(", ")}.`;
console.log(person);

// we can also add new parameters later
person.isASmoker = true;
console.log(person); // Monica in fact is a smoker

console.log(person['tech'][2]);

for (const key in person) {
    let result3 = document.querySelector('#result3');
    result3.innerHTML = result3.innerHTML + '<br>' + key + person[key].constructor; // lists out a list of keys in an object, and it's constructor
    // console.log(key);

    if (person[key].constructor === String) {
        let result4 = document.querySelector('#result4');
        result4.innerHTML = result4.innerHTML + '<br>' + person[key]; // this shows only string keys (no numbers, booleans, nor functions)
    }
}
