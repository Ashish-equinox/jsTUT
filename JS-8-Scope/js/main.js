// scope - var,let and const

// var--> not used anymore as even after defining a var u can redefine it and it shows no error on console thus part of legacy code now,

// shortcomings of var:-
// var a=5;
// var a=10;

// let--> can only define a var once and can reassign it 
// let x=5;
// // let x=10;(shows error)
// x=10; //reassign possible

// const--> can be defined and assigned only once
// const z=20;
// z=15; //shows error


// --------------------------------------------//


// Scoping

// global scope(in g-scope,all 3 types have same effects)
// var x=1;
// let y=2;
// const z=3;

// console.log(`global : ${x}`);
// console.log(`global : ${y}`);
// console.log(`global : ${z}`);

// // local scope --> has 2 types: fn scope and block scoped

// function myFunc(){
    
//     // fn-scope
//     // console.log(`function : ${x}`);
//     // console.log(`function : ${y}`);
//     // console.log(`function : ${z}`);

//     {
//     // block-scope
//         var x=10; //fn-scoped, explained below
//         const z=5;

//         console.log(`block: ${x}`);
//         console.log(`block: ${y}`);
//         console.log(`block : ${z}`);
//     }

//     console.log(`function : ${x}`);
//     console.log(`function : ${y}`);
//     console.log(`function : ${z}`);
// }
// myFunc();

// var is fn scoped i.e even if a var is defined in a block it will inject its value in fn scope(eg. var x=10 in block) as well whereas let and const if defined within a block respects it(eg. const z in block) 