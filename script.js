//complete this code
class Animal {
	 _species;
  constructor(species){
    this._species=species;
  }
  get makeSound(){
    return this._species
  }

}

class Dog extends Animal {
	 bark(){
    console.log("woof")
  }

	 makeSound() {
    console.log("woof");
  }
}

class Cat extends Animal {
	 purr(){
    console.log("purr")
  }
	 makeSound() {
    console.log("Meow!");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
