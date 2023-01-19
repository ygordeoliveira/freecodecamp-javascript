// Only change code below this line
class Vegetable {
  constructor(carrot) {
    this.name = carrot;
  }
  showCarrot() {
    return "carrot" 
  }  
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


//A classe Vegetable permite criar um objeto vegetal com um nome de propriedade que é passado para o construtor.