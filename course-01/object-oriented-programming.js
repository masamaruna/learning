class Person {
    constructor(name, age, pet, country) {
        this.name = name;
        this.age = Number(age);
        this.pet = pet;
        this.country = country;
    }

    fakeConsoleLog() {
        console.log(
            this.name + " is " + this.age + " it has a " + this.pet + " and is from " + this.country
        );
    }
}

const leon = new Person("Leon", 22, "Dead Hamster", "the UK");
const masa = new Person("Masa", 22, "Dog Meni", "the UK");

leon.fakeConsoleLog();
masa.fakeConsoleLog();