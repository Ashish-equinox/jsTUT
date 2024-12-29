// Arrays

const myArray=[];

// add elements to any array
myArray[0]="dave";
myArray[1]="1001";
myArray[2]=false;

// refer to an array
console.log(myArray);

// length property
// console.log(myArray.length);

// last element in an array
// console.log(myArray[myArray.length-1]);

// Properties of array :-

// adding elements to array
// myArray.push("school");

// console.log(myArray);

// // removing elements from array
// const lastItem=myArray.pop();
// console.log(lastItem);

// // unshift-> adds element to front of array
// myArray.unshift(42);
// console.log(myArray);

// // shift-> removes element from front of array
// myArray.shift();
// console.log(myArray)

// splice-> removes elements from a particular index
// don't use delete as it removes that element but leaves "empty" keyword at that index 

// //begins at index-> 1 and removes 1 element from there
// myArray.splice(1,1);
// console.log(myArray);

// // splice is used for replacing a value as well
// myArray.splice(1,1,42);
// console.log(myArray);


// // without removing anything add an element 
// myArray.splice(1,0,"chad");
// console.log(myArray);

// -------------------------------------------//

// Some more properties of arrays :-

const arr=["A","B","C","D","E","F"];

// // extract a range of elements from base array
// const newArr= arr.slice(2,5);
// console.log(newArr);

// // reverse any array
// arr.reverse();
// console.log(arr);

// // join--> takes each element from array and seperate it by "," also converts it to string

// const newString=arr.join();
// console.log(newString);

// // split--> takes a string and seperate it with delimiters present in a string and converts it to array
// const newArray=newString.split(",");
// console.log(newArray);

// // concatenation of 2 arrays
// const a1=[1,2,3];
// const a2=[4,6,8];

// // 1st method
// const x= a1.concat(a2);
// console.log(x);

// // 2nd method for concatenation 2 arrays(spread operator-->[...x , ..y])
// const y= [...a1 , ...a2];
// console.log(y);

// --------------------------------------------//

// // nested arrays

// const equipShelfA=["baseball","football","volleyball"];
// const equipShelfB=["baseball","football","volleyball"];

// const clothesShelfA=["tank tops","t-shirts","jerseys"];
// const clothesShelfB=["sweat tops","sweat pants","hoodies"];

// // nesting
// const equipDept=[equipShelfA,equipShelfB];
// const clothesDept=[clothesShelfA,clothesShelfB];

// // go to equipShelfA-->football
// console.log(equipDept[0][1]);

// // jerseys 
// console.log(clothesDept[0][2]);

// const sportsStore=[equipDept,clothesDept];

// // fetching hoodies[multi nesting]
// console.log(sportsStore[1][1][2]);