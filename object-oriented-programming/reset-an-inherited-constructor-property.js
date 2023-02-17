function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype instanceof Animal;
Dog.prototype instanceof Animal;

let duck = new Bird();
let beagle = new Dog();

// Only change code below this line
Bird.prototype.constructor = Bird;
duck.constructor;

Dog.prototype.constructor = Dog;
beagle.constructor;