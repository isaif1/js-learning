//it is iterable
//stored data in orderd fashion
//stored key-value pair as object
//duplicate keys are not allowed
//in map you can use anything as key like array , string etc


const myMap = new Map();
myMap.set('abc',1);
myMap.set(5,'abc');
let arr = [1,2,3];
myMap.set(arr,'hello array');
myMap.set({1:1},'hello object');

console.log(myMap.get('abc'));
console.log(myMap.get(arr));

for(let key of myMap.keys()){
//console.log(Array.isArray(key));
console.log(key, typeof key);
}

//if you want to access key and value then write it like this
//in map it store kind of an array
for(let [key,value] of myMap){
    console.log(key,value);
}



//some more application

human1={
    id:1,
    name: 'ankush'
}

human2={
    id:2,
    name: 'ankusha'
}

const fullInfo = new Map();
fullInfo.set(human1,{age:29,gender:'male'});
fullInfo.set(human2,{age:26,gender:'female'});
console.log('fullInfo',fullInfo);
console.log(fullInfo.get(human1).gender);



// clone using assign

// const human3 = {...human1};
const human3 = Object.assign({},human1);
human1.key3 = 'bahbb';
console.log(human3);
console.log(human1);



//optional chanining

const user = {
    name : 'harshit',
    //address: {houseNumber: 23}
}

//it will not show error when we try to access property of undefined
//saviour
console.log(user?.name);
console.log(user?.address?.houseNumber);