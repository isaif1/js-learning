const headline = document.querySelector(".headline")
//we can change innerHtml
headline.innerHTML = '<h1>Inner Html changed</h1>'
headline.innerHTML += "<button class=\"btn\">Learn More</button>";

//get all classlist
const todo = document.querySelector(".todo");
console.log(todo.classList);
// todo.classList.add('bg-dark');
// todo.classList.remove('container');
console.log(todo.classList.contains('container'));
// todo.classList.toggle('bg-dark'); // if bg-class is not added then add it, if already there then remove it
//give new class

//we can add html element using js

const todoList = document.querySelector('.todo-list');
// todoList.innerHTML += '<li>New To do</li>';
//should not use above code, because it is rendering 1,2,3 like this
//performance issue
//never use innerHTML to add new element
//use it for changing something in already present html element

const newItem = document.createElement("li");
// const itemText = document.createTextNode("new item");
newItem.textContent = "new Items";
//newItem.append(itemText);
// todoList.append(newItem);
// todoList.prepend(newItem);
//append prepend before after


//remove element
const todo1 = document.querySelector('.todo-list li');
todo1.remove();


//we can add like below also, but no preferred
// beforebegin
// beforeend
// afterbegin
// afterend

// const todolist = document.querySelector(".todo-list");
// todolist.insertAdjacentHTML("afterbegin","<li>hello new task</li>")
