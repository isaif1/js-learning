//switchcase can be handled by if else also but that is tedious process

let day = 2;
//if break ni lagaya na to jo condition true hogi uske baad saare print kr dega
switch (day) {
    case 0:
        console.log("MonDay"); break;
    case 1:
        console.log("TuesDay"); break;
    case 2:
        console.log("WednesDay"); break;
    case 3:
        console.log("ThursDay"); break;
    case 4:
        console.log("FriDay"); break;
    case 5:
        console.log("SaturDay"); break;
    case 6:
        console.log("SunDay"); break;
    default:
        console.log("Not a day in week");
}

for (let i = 0; i < 10; i++)console.log(`number is ${i}`);
for (let i = 0; i < 10; i++) {
    if (i === 4) break;
}

//baki break and continue in the loop is same as c++;
// if else condition is same as c++
