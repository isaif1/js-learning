//synchronous callback function

const dataType = (data)=>typeof data==='number';

function getAddOfnumber(num1,num2,success,failure){
    dataType(num1) && dataType(num2) 
    ? success(num1,num2) : failure();
}

const onSuccess=(num1,num2)=>{
    console.log(num1+num2);
}
const onFailure = ()=>{
    console.log('wrong data type passed')
}

getAddOfnumber(55,4,onSuccess,onFailure);
