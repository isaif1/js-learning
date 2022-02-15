//problem statement
//after one second change first heading to heading 1 and after 2 second 
//change 2nd heading to heading 2 and so on......
const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');

//CALLBACK-HELL
//this is called callback-hell
// setTimeout(()=>{
// heading1.textContent = "one";
// heading1.style.color = 'violet';
// setTimeout(()=>{
//     heading2.textContent = "two";
//     heading2.style.color = 'purple';
//     setTimeout(()=>{
//         heading3.textContent = "three";
//         heading3.style.color = 'red';
//         setTimeout(()=>{
//             heading4.textContent = "four";
//             heading4.style.color = 'green';
//             },2000)
//         },1000)
        
//     },2000)
// },1000)

//this can be done using promises without callback
//it will also handle error without showing on the server


// PYRAMID OF DOOM ALSO CALLBACK HELL
function changeText(element,text,color,time,onSuccessCallBack,onFailCallBack){
setTimeout(()=>{
if(element){
    element.textContent = text;
    element.style.color = color;
if(onSuccessCallBack)onSuccessCallBack();
}else{
    onFailCallBack();
}
},time)}

changeText(heading1,'one','violet',1000,()=>{
    changeText(heading2,'two','red',1000,()=>{
        changeText(heading3,'three','blue',1000,()=>{
            changeText(heading4,'four','green',1000,()=>{
                changeText(heading5,'five','yellow',1000,()=>{
                    changeText(heading6,'six','purple',1000,()=>{
                        changeText(heading7,'seven','orange',1000,()=>{

                        },()=>{
                            console.log('Heading 7 does not exist');
                        })
                    },()=>{
                        console.log('Heading 6 does not exist');
                    })
                },()=>{
                    console.log('Heading 5 does not exist');
                })
            },()=>{
                console.log('Heading 4 does not exist');
            })
        },()=>{
            console.log('Heading 3 does not exist');
        })
    },()=>{
        console.log('Heading 2 does not exist');
    })
},()=>{
    console.log('Heading 1 does not exist');
})
