// Math methods and properties

console.log(Math.PI);

// trunc-> removes all decimals
console.log(Math.trunc(Math.PI));

// round-> rounds to nearest decimal
console.log(Math.round(3.5));

// ceil-> rounded to upper value no matter the decimal
console.log(Math.ceil(Math.PI));

// floor-> rounded to lower value no matter the decimal
console.log(Math.floor(Math.PI));

console.log(Math.pow(5,2))

console.log(Math.min(2,0.5,7));

console.log(Math.max(2,0.5,7));

// random-> returns random number b.w 0 to 1(excluding 1)
console.log(Math.random());

// generating random nos. b.w 0 to 10(includes 10) using random
console.log(Math.floor(Math.random()*10)+1);

// replace 10 with any no. to increase the range
console.log(Math.floor(Math.random()*20)+1);

// wap to return a random letter from your name
let myName="ashish";
console.log(myName.charAt(Math.floor(Math.random()*myName.length)));
// remove +1 from the end of floor to get any letters of string


