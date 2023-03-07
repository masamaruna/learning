class Animal {
    constructor(species, age, weight, height) {
        this.species = String(species);
        this.age = Number(age);
        this.weight = Number(weight);
        this.height = Number(height);
    }

    getInfo() {
        console.log(this.species + " is at the ripe age of " + this.age + ", weighs a whooping " + this.weight + "kg and its height skyrockets at about " + this.height +"cm.")
    }
}

class Cat extends Animal {
    constructor(species, weight, height) {
        super(species, weight, height);
    }

    getCatInfo() {
        console.log(this.species + " loves to sleep.")
    }
}

class Dog extends Animal {
    constructor(weight, height) {
        super("dog", 12, weight, height);
    }

    getDogInfo() {
        console.log("this young gentleman is " + this.weight + "kg heavy and " + this.height + "cm tall.");
    }
}

const snjeska = new Animal("hamster", 2, 0.05, 7);
const daki = new Cat("a cat", 13, 30);
const meni = new Dog(9, 30);

snjeska.getInfo();
daki.getCatInfo();
meni.getDogInfo();