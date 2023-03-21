class Animal {
    // this is called a method
    constructor(species, name) {
        // this is called a property
        this.name = name;
        this.height = 110;
    }
    speak () {
        console.log('vau');
    }
    renameAnimal (name) {
        this.name = name;
    }
    heightToCms () {
        return this.cms = this.height * 2.5
    }
}

const dog = new Animal('dog','Meni');
dog.speak();
dog.renameAnimal("Snjeska");
const cms = dog.heightToCms();

console.log(dog.cms);