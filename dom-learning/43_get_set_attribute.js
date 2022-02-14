//href is attribute
//all in blue color are called attribute in html
const link  = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://youtube.com');
console.log(link.getAttribute('href'));

const inputElement  = document.querySelector('.form-todo input');
console.log(inputElement.getAttribute('type'));



//GET ELEMENTS BY USING GET ELEMENTS BY CLASS NAME
//GET ELEMENTS BY USING QuerySelectorAll

//only string is passed as parameter, will give all elements with class nav-items
// let navItems = document.getElementsByTagName("a"); //HTML Collection, array like object
// console.log(navItems);
// console.log(Array.isArray(navItems));//it is not array
//can not use forEach to iterate HTML Collection

//DO BACKGROUND GREEN OF NAV ITEMS
//from here through iterate we cahn change styling
// for(let i=0;i<navItems.length;i++){
//     navItems[i].style.backgroundColor = 'white';
//     navItems[i].style.color = 'black';
//     navItems[i].style.fontWeight = 'bold';
// }


// for(let navItem of navItems){
//     navItem.style.backgroundColor = 'white';
//     navItem.style.color = 'black';
//     navItem.style.fontWeight = 'bold';    
// }

//we can change HTML Collections to array, and apply forEach
// navItems = Array.from(navItems);
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = 'white';
//     navItem.style.color = 'black';
//     navItem.style.fontWeight = 'bold';   
// })


// same thing we can do using querySelectorAll
let navItems = document.querySelectorAll(".nav-item"); //NodeList, array like object
console.log(navItems);
console.log(Array.isArray(navItems));//it is not array
//in NodeList we can use forEach as well
navItems.forEach((navItem)=>{
    navItem.style.backgroundColor = 'white';
    navItem.style.color = 'black';
    navItem.style.fontWeight = 'bold';   
})