const allButtons = document.querySelectorAll("button");

// for(let button of allButtons){
//     button.addEventListener('click',function(){
//         console.log(this.textContent);
//     });
// }


//EVENT OBJECT
//whenevr we add even listener on any element
//js engine will execute code line by line
//browser = js engine+ WebApi

//when browser got to know that user has clicked then
// browser callback function ko js engine ko degi
// and callback function ke saath jo event hua uski information

for(let button of allButtons){
    button.addEventListener('click',(e)=>{
        console.log(e.currentTarget);
    });
}