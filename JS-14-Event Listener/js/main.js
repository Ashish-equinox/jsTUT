// JS Event Listeners

// const view=document.querySelector("#view2");

// const div=view.querySelector("div");
// const h2=div.querySelector("h2");

// syntax: addEventListener(event,function,useCapture)

// const doSomething = () => {
//     alert("doing something");
// };

// // when h2 is clicked(my 2nd view), it responds with a pop-up
// h2.addEventListener("click",doSomething,false);
// h2.removeEventListener("click",doSomething,false);

// // adding event listener for anonymous function

// h2.addEventListener("click",(event)=>{
//     console.log(event.target);
//     event.target.textcontent="clicked";
// });

// --------------------------------------------------------------//

// ready state change event -> it allows developers to track state of a resource being loaded on the wp[web page]
/*
There are 3 possible readyState values:

1->loading: The document is still loading.
2->interactive: The document has finished loading, and the user can interact with it, but some sub-resources like images may still be loading.
3->complete: The document and all sub-resources (like images) have fully loaded.
*/

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
  }

  // we create a fn that kicks things off by communicating with DOM & other elements after readyState is complete

  initApp();
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  //  if useCapture is false => moves from inside to outside element's eventListener and for true => moves form out to inside(visualized better when using .stopPropagation)

  // now if we click h2 only view changes as it moves from out->in

  // event.stopPropagation() => stops events from getting triggered in later elements

  // if h2 has stopPropagtion and all useCapture are false then event stops at h2 and bubbling doesn't happen in upper elements

  view.addEventListener(
    "click",
    (event) => {
      // event.stopPropagation();
      // toggle-> automatically changes color(removes existing,adds new one to css)

      view.classList.toggle("purple");
      view.classList.toggle("darkblue");
    },
    false
  );

  div.addEventListener(
    "click",
    (event) => {
      // event.stopPropagation();
      div.classList.toggle("blue");
      div.classList.toggle("black");
    },
    false
  );

  h2.addEventListener(
    "click",
    (event) => {
      const myText= event.target.textContent;
      myText==="My 2nd View" ? (event.target.textContent = "clicked") : (event.target.textContent= "My 2nd View")
    },
    false
  );
  
// event.target allows you to identify the exact element inside the nav that the mouse is interacting with.

// height100 -> change height to 100px

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover",(event)=>{
    event.target.classList.add("height100");
  });
  nav.addEventListener("mouseout",(event)=>{
    event.target.classList.remove("height100");
  });
};

// event.preventDefault() is used to stop elements from doing their default action like reloading a form when clicked "submit"
// eg. in this topic at end of gray's lec

//--------------------------------------------------------------//
                            // :) //
//--------------------------------------------------------------//

