// JSON--> Java Script Object Notation

// Json is used to send and receive data(especially b.w server & web app). It is a text format that is completely language independent i.e it can be used to send and receive data in many languages apart from JS.

const myObj={
    name:"Dave",
    hobbies:["eat","sleep","code"],
    hello: function(){
        console.log("Hello!");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

// this is just a simple object created which we will convert to JSON string format using "stringify" 

const sendJSON=JSON.stringify(myObj);
console.log(sendJSON);

// while converting to JSON, all keys & values of obj changes to strings and array gets dissolved into strings for both keys and values and any function is dropped from the JSON file

// changes from obj-->string
console.log(typeof sendJSON);
// since it ain't obj anymore it returns undefined
console.log(sendJSON.name);

// converting string back to object --> using "parsing"
const receiveJSON= JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);



