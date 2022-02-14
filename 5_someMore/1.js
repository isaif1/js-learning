const rootnode = document.getRootNode();
const htmlElementNode = rootnode.childNodes[0];
console.log(htmlElementNode.childNodes);
const headElementNode = htmlElementNode.childNodes[0];
const textElementNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];

//we can get parent node also
//text is space + newl line
console.log(htmlElementNode.parentNode);
console.log(textElementNode.nextSibling);

const heading = document.querySelector('h1');
const parent = heading.parentNode.parentNode;
parent.style.backgroundColor = 'gray';

//we can directoyl select head
const head = document.head;
console.log(document.querySelector('head').querySelector('title'));
//we can get directly children
console.log(document.querySelector('.container').children);
