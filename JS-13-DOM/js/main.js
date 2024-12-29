// error topic in fee-24 ss->google keep

// DOM-> Document Object Model

// view1 is the entire "my page" section of our web page 
// Mtd-1: we're selecting element by Id using "getElementById" mtd

const view1=document.getElementById("view1");
console.log(view1);

// Mtd-2: we're selecting element by Id using "querySelector" mtd
const view2=document.querySelector("#view2");
console.log(view2);

// changing style to show/hide different views(changing css of wp by accessing "display" property)
// both views set to flex will enable a scroll bar to access both views
view1.style.display="flex";
view2.style.display="none";

// --------------------------------------------------------------//

// Mtd-1: we're selecting element by Class using "getElementsByClassName" mtd

// using "getElementsByClassName" gives "Html collections" that consists of elements whereas "querySelectorAll" gives "Nodes list  " which consists of elements,whitespaces etc.

const views = document.getElementsByClassName("view");
console.log(views);

// Mtd-2: using "querySelectorAll(".class")
const sameViews=document.querySelectorAll(".view");
console.log(sameViews);

// --------------------------------------------------------------//

// accessing each div 
const divs=view1.querySelectorAll("div");
console.log(divs);
const sameDivs=view1.getElementsByTagName("div");
console.log(sameDivs);

// targeting specific divs only(here even divs)
const evenDivs=view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for(let i=0;i<evenDivs.length;i++){
    evenDivs[i].style.backgroundColor="darkblue";
    // evenDivs[i].style.width="200px";
    // evenDivs[i].style.height="200px";
}

// -------------------------------------------------------------//

// targeting & modifying nav-bar
const navText=document.querySelector("nav h1");
console.log("navText");
navText.textContent="Hello World";

const navbar= document.querySelector("nav");
navbar.innerHTML=`<h1>Hello!</h1> <p>this should align right.`;
// need to log an element first before changing its CSS
console.log(navbar);
navbar.style.justifyContent="space-between";

// --------------------------------------------------------------//

// traversing the DOM tree(using different relations i.e parent,siblings)

console.log(evenDivs[0]);

//section is parent
console.log(evenDivs[0].parentElement);  
//all 12 divs are children
console.log(evenDivs[0].parentElement.children); 
// childNodes includes whitespaces,elements etc.
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild); //shows last node
console.log(evenDivs[0].parentElement.lastElementChild); //shows last div
console.log(evenDivs[0].parentElement.firstChild);//shows first node

console.log(evenDivs[0].parentElement.firstElementChild);//shows first div
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

// --------------------------------------------------------------//

// Creating view2

view1.style.display="none";
view2.style.display="flex";
view2.style.flexDirection="row";
view2.style.flexWrap="wrap";
view2.style.margin="10px";

// clearing up the center of web page(comment this part to see what was before on this page)
while(view2.lastChild){
    view2.lastChild.remove();
}

// creating divs just like in view1

const createDivs=(parent,iter) => {
    const newDiv= document.createElement("div");
    newDiv.textContent=iter;
    newDiv.style.backgroundColor="#000";
    newDiv.style.width="100px";
    newDiv.style.height="100px";
    newDiv.style.margin="10px";
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.alignItems="center";
    parent.append(newDiv);
}

for(let i=1;i<=12;i++){
    createDivs(view2,i);
}

