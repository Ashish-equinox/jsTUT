// conditionals: If statments
let testScore= 50;
let fail=true;
let grade;

if(testScore>=90){
    grade="A";
}
else if(testScore>=80){
    grade="B";
}
else if(testScore>=70){
    grade="C";
}
else if(testScore>=60){
    grade="D";
}
else{
    if(fail){
        grade="U";
    }
    else{
        grade="F";
    }
}
console.log(grade);


// conditionals: switch statments
// random fn used with floor avoids 0 generation
switch(Math.floor(Math.random()*5 + 1)) {
    case 1:
        console.log("Matched-1");
        break;
    case 2:
        console.log("Matched-2");
        break;
    case 3:
        console.log("Matched-3");
        break;
    default:
        console.log("No match with any Case conditions");
}

// conditionals: ternary operator

// syntax
// condition ? ifTrue : ifFalse;

let soup="Chicken Noodle Soup";
// let soup; //undefined means false in js
// `-> is a backtick which prints the value of ${soup}

let response=soup? `Yes we have ${soup} today`: "sorry,no soup today";
console.log(response);
