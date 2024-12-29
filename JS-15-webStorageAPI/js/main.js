// Web Storage API

// not part of the DOM - refers to the window API
// Available to JS via the global varialbe: window
// we don't have to type window, its implied
// eg:
// window.alert(window.location);
// alert(location); 
//alert(location)-> returns IP address of site its hosted on

// ------------------------------------------------------------//

// local storage vs session storage

// local storage:- contains persistent data that remains even when that website is closed, can be used to store high score of players etc.

// session storage:- contains data that remains only for a session and clears when that site is closed

const myArray=["eat","sleep","code"];
const myObject={
    name: "Ashish",
    hobbies:["eat","sleep","code"],
    logName: function(){
        console.log(this.name);
    }
};

// we store above obj as local/session storage
// convert to JSON before storing that obj
// getItem => fetches obj from local/session storage(after parsing)
// setItem => sets obj to local/session storage(after stringify)

// sessionStorage.setItem("mySessionStore",JSON.stringify(myArray));
// const mySessionData=JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);

// myLocalStore & myArray are key-value pair 
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const myLocalData=JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);

// additional fn(s):-
// 1) removeItem("key")-> removes obj with given key 
// localStorage.removeItem("myLocalStore");

// 2) clear -> clears all obj(s) from session/local storage
// localStorage.clear();

// 3) key(index) -> returns key at given index of session/local storage
// console.log(localStorage.key(0));

// 4) length() -> returns length of session/local storage
// const length= localStorage.length;
// console.log(length); 

//------------------------------------------------------------//
                        //  :)
//-------------------------------------------------------------//