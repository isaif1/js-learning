// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new content"; //this cannnot be use two times
// const cloneLi = li.cloneNode(true);//given true because have to do deep cloning
// ul.appendChild(li);
// ul.prepend(cloneLi);

//append does not work in internet explorer so we use appendChild

//appendChild
//insertBefore
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
const referenceChild = document.querySelector(".first-todo");
li.textContent = "new content"; 
// ul.insertBefore(li,referenceChild);
// ul.replaceChild(li,referenceChild);
ul.removeChild(referenceChild);


//STATIC LIST AND LIVE LIST
//querySelectorAll will give static list
//getElementBySomething will give us live list(HTML Collection is live list)


//HOW TO GET DIMENSIN OF ELEMENT
//get height and width of element

const sectionToDo = document.querySelector(".todo-list");
const info = sectionToDo.getBoundingClientRect();
console.log(info);