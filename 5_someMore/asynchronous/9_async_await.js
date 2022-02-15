// async gives us promise always in return
console.log('start');


const URL = 'https://jsonplaceholder.typicode.com/posts';
async function getPosts(){
    const response = await fetch(URL);
    if(!response.ok){
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    return data;
}

getPosts()
.then(myData=>{
    console.log(myData);
})
.catch(error=>{
    console.log(error);
})

console.log('end');