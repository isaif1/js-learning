// click, button press, hover
//have to fire event

const btn = document.querySelector('.btn-headline');
console.dir(btn);
//below is old method
// btn.onclick = function(){
//     console.log('you clicked me');
// }

//we have method addEventListener
//arrow case me window hoga, cause iska this ek level up hoga
//normal function ke case me button hoga
btn.addEventListener('click',()=>{
    console.log('you clicked me');
    console.log('value of this',this);
    })