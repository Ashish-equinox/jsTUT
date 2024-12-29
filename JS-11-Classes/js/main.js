// JS classes

// Program-1

// class Pizza{
//     constructor(pizzaSize,pizzaType){
//         this.size=pizzaSize;
//         this.type=pizzaType;
//         this.crust="original";
//     }
//     // getter and setter used for changing crust outside the class
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(pizzaCrust){
//         this.crust=pizzaCrust;
//     }
//     bake(){
//         console.log(
//             `Baking a ${this.size} ${this.type} ${this.crust} crust pizza`
//         );
//     }
// }

// // "new" keyword creates a new object based on a class or constructor function
// const myPizza=new Pizza("pepperoni","small");

// myPizza.setCrust("thin");
// console.log(myPizza.getCrust());

// myPizza.bake();

// -------------------------------------------------------------//

// Program-2-> creating a child class

// class Pizza{
//     constructor(pizzaSize,pizzaType){
//         this.size=pizzaSize;
//         this.crust="original";
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(pizzaCrust){
//         this.crust=pizzaCrust;
//     }
// }

// // creating a child class using "extend" 
// class SpecialtyPizza extends Pizza{
//     constructor(pizzaSize){
//         // "super calls the constructor of parent as when child class is called, parent is also called..."
//         super(pizzaSize);
//         this.type="The Works";
//     }
//     slice(){
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
//     }
// }

// const mySpecialty= new SpecialtyPizza("medium");
// mySpecialty.slice();

// --------------------------------------------------------------//

// Program-3 --> using public and private classes

// uptil now we have used getters/setters or functions to make properties private but using "#" that can be done easily
// we just have to declare those properties above the constructor to use them in functions/constructors

// class Pizza{
//     crust="original"; //public class
//     #sauce ="traditional"; //private
//     #size; //private
//     constructor(pizzaSize){
//         this.#size=pizzaSize;
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(pizzaCrust){
//         this.crust=pizzaCrust;
//     }
//     hereYouGO(){
//         console.log(
//             `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza. `
//         );
//     }
// }

// const myPizza=new Pizza("large");
// myPizza.hereYouGO();

// //crust is allowed outside its defined class as its public 
// console.log(myPizza.crust); 

// //its a pvt class
// console.log(myPizza.#sauce);  

// -------------------------------------------------------------//