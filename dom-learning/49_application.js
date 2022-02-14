//when click then make background of button yellow
const allButtons = document.querySelectorAll("button");
allButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.target.style.backgroundColor = 'yellow';
    })
})