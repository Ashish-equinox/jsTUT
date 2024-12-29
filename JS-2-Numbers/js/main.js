// Numbers

const myNumber=42;

// A number with a decimal point is a float 
const myFloat=42.01;

const myString="42";

console.log(myFloat);

console.log(myFloat==myNumber); //false since 2 diff data types

//using Number(x) to convert string x to number
console.log(Number(myString)+3); 

// Number fn converts only when given string is numeric or data type is boolean
console.log(Number("dave")); 
console.log(Number(undefined));

// Number Methods:- 
// 1) the Number.isInteger() method determines whether the passed value is an integer

console.log(Number.isInteger(myString));

// 2) the Number.parseFloat() method parses an argument and returns a float. If a number can't be parsed from the argument it returns NaN(not a number).
console.log(Number.parseFloat(myString));

// the Number.isNan() method determines whether the passed value is NaN and its type is Number

console.log(Number.isNaN(("dave"))); //false

// eg. of number which returns is NaN but type is Number
Number.isNaN(NaN); // true

// true (dividing zero by zero results in NaN)
Number.isNaN(0 / 0); 

// true (square root of a negative number results in NaN)
Number.isNaN(Math.sqrt(-1)); 

// the global isNaN() fn determines whether a value is NaN or not.
console.log(isNaN("dave")); //true