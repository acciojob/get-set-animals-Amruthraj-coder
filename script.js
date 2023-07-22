//complete this code
class Animal {
	 _species;
  constructor(species){
    this._species=species;
  }
  get species() {
    return this._species;
  }

  makeSound() {
    console.log("Animal sound"); // We'll implement this method in the subclasses
  }

}

class Dog extends Animal {
	 bark(){
    console.log('The Golden Retriever makes a sound')
  }

	 makeSound() {
    console.log("woof");
  }
}

class Cat extends Animal {
	 purr(){
    console.log('The Siamese makes a sound')
  }
	 makeSound() {
    console.log("Meow!");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
