class Animal {
    // this is called a method
    constructor(species, name) {
        // this is called a property
        this.species = species.toLowerCase();
        this.name = 'Daki';
        this.height = 110;
        this.sound = 'vau';
    }

    speak() {
        console.log('PARENT');
    }

    changeName(name) {
        this.name = name;
    }

    setSpecies(species) {
        this.species = species;
    }
}

class Cat extends Animal {
    speak() {
        super.speak(); // inherits the same property from the parent and subclass AKA runs both
        console.log('CHILD');
    }
}

const cat = new Cat ('Cat', 'Daki');
cat.setSpecies('cat');
cat.changeName('Mala sapa');
cat.speak();
console.log(cat);