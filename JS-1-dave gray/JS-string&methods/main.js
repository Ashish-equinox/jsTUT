console.log("hello world");
console.log(typeof "ashish");
console.log(typeof 42);
console.log(typeof true);

// strings
const myVariable='mathematics';

// the length property
// console.log(myVariable.length);

console.log(myVariable.charAt(4)); 

// first occurrence of word in string
console.log(myVariable.indexOf("mat"));

// last occurrence of word in string
console.log(myVariable.lastIndexOf("mat"));

// slicing a string(upper limit not included)
console.log(myVariable.slice(5,8));

// uppercase/lowercase
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

// include method(memebership operator)
console.log(myVariable.split("e"));