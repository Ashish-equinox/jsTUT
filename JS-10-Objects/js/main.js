// // objects--> key-value pairs in curly braces
// const myObj={Username:"Dave"};

// program-1

// const anotherObj={
//     alive: true,
//     answer:42,

//     // arrays as value of a key
//     hobbies:["eat","sleep","code"],
//     beverage: {
//         morning:"coffee",
//         afternoon:"Iced Tea"
//     } ,

//     // we can put anonymous fn in obj's value
//     // all other values of this object are properties but tis' is a method
//     action1: function(){
//         return "hello duniya";
//     },

//     // this helps to access current obj's properties
//     action2:function(){
//         return `time for ${this.beverage.morning}`;
//     }
// };
// // access elements from objects

// console.log(anotherObj.alive); or
// console.log(anotherObj["alive"]);

// console.log(anotherObj.hobbies[1]);

// //access methods from obj
// console.log(anotherObj.action1()); 

// console.log(anotherObj.action2());

// --------------------------------------------------------------//

// program-2

// const vehicle={
//     wheels:4,
//     engine: function(){
//         return "vroooom!";
//     }
// };

// // creating child class 
// const car=Object.create(vehicle);
// car.doors=4,
// car.engine=function(){
//     return "whoooosh!";
// }; 

// // for same properties/methods of child class , child's properties/methods overrides parent's prop/methods

// console.log(car.engine());

// --------------------------------------------------------------//

// program-3

// const band = {
//     vocals: "Robert Plant",
//     guitar: "Jimmy Page" ,
//     bass: "John Paul Jones",
//     drums: "John Bonham"
// };

// // displaying keys & values in array form
// console.log(Object.keys(band));
// console.log(Object.values(band));

// // iterating over an object --> uses For-in loop
// for(let job in band){
//     console.log(`On ${job}, it's ${band[job]}!`);
// }

// // deleting keys from object--> delete keyword
// delete band.drums;

// // hasOwnPropery--> returns boolean for presence of specific key in object
// console.log(band.hasOwnProperty("drums"));

// --------------------------------------------------------------//

