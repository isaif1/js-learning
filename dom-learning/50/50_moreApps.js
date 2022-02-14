const Buttons = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector('.current-color');

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
}

Buttons.addEventListener('click',(e)=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})


//KEYPRESS
//whatever key we will pres that will be there
body.addEventListener('keypress',(e)=>{
    console.log(e.key);
})
//MOUSEEVER

Buttons.addEventListener('mouseover',()=>{
    console.log('mouseover occured');
})

Buttons.addEventListener('mouseleave',()=>{
    console.log('mouseleave occured');
})