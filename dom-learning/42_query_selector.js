//select element using query selector
//same as we have done in the css
const about = document.querySelector('#about');
console.dir(about);//this will be object

//anything can be select using quaeryselector, not only id

const header = document.querySelector('.header');
console.log(header);//this will be object

//id must be unique, but classes should not be unique

const navItem = document.querySelectorAll('.nav-item');
console.log(navItem);//this will be object




//CHANGE NAME OF HEADING

// const heading = document.querySelector('h2');
// console.dir(heading.textContent);//this will be object
// console.dir(heading.innerHTML);
// heading.textContent = 'something else';
// console.dir(heading.textContent);



//CHANGE STYLE OF CSS
const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading.style);
//style will be an object
mainHeading.style.color = 'yellow';
//always write in camelCase, background-color will give error
mainHeading.style.backgroundColor = 'green';
mainHeading.style.border = '5px solid black';