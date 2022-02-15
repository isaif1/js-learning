// AJAX-> Asynchronous JavaScript and XML
//Client and Server communication is HTTP

//HTTP Request
//at frontend payload can be in JS but in backend it may be in different language
//http request asynchronously hota hai

//HTTP request is a set of 'seb development technique'
//using many technologies on the client side
//to create asynchronous web application


//with AJAX web applications can send and retreive
//data from server asynchronously(in background)
//without interfering with display and 
//behaviour of existing page

//we don't use data in xml format anymore
//Json is being use now

//3ways to create and send request to server
// XMLHttpRequest(old way of doing)
// fetch API (new way of doing)
//axios (third party library)

const URL = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();

console.log(xhr.readyState);
xhr.open("GET",URL);
console.log(xhr.readyState);
//these all things will be done asynchronously in 
//browser and rest code will execute normally
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         console.log(xhr);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);       
//     }
// }

//we can directly fetch data like below also
// onload will only run when readyState will be 4

// xhr.onload = function(){
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }


//error handelling
//here error will occure on wrong endpoint accessing
// xhr.onload = ()=>{
//     if(xhr.status>=200 && xhr.status<300){
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
//     const xhr2 = new XMLHttpRequest();
//     const id = data[4].id;
//     xhr2.open("GET",`${URL}/${id}`);
//     xhr2.onload = ()=>{
//         const data2 = JSON.parse(xhr2.response);
//         console.log(data2);  
//     }
//     xhr2.send();
//     }else{
//         console.log('something else error!');
//     }
// }

// //this error will occure on network failure
// xhr.onerror = () =>{
//     console.log('network error!');
// }

// xhr.send();




//USING PROMISE INSTEAD OF CALLBACK
// function sendRequest(method,url){
// return new Promise((resolve,reject)=>{
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET",url);
//     xhr.onload = ()=>{
//         if(xhr.status>=200 && xhr.status<300){
//         const response = xhr.response;
//         resolve(response)
//         }else{
//             reject(new Error('something else error!'));
//         }
//     }
//     xhr.onerror = () =>{
//         console.log('network error!');
//     }
//     xhr.send();
// })
// }

// sendRequest('GET',URL)
// .then((response)=>{
//     const data = JSON.parse(response);
//     return data;
// })
// .then((data)=>{
//     const id = data[3].id;
//     return id;
// })
// .then((id)=>{
//     //not able to understand why this
//     return sendRequest('GET',`${URL}/${id}`);
// })
// .then((res)=>{
//     console.log(JSON.parse(res));
// })
// .catch((error)=>{
//     console.log(error);
// })


//ABOVE ALL THING CAN BE DONE USING FETCH
//it will always return promise
//it will only give error when there is no network
fetch(URL)
.then(response=>{
    if(response.ok){
    return response.json();
    }else{
        throw Error("Something went wrong!");
    }
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log(error);
})

//JSON.stringify json me data ko convert krta hai


//POST DATA

  fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
.then(response=>{
    if(response.ok){
    return response.json();
    }else{
        throw Error("Something went wrong!");
    }
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log(error);
})