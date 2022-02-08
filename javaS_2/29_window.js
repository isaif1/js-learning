// console.log(this);
// console.log(window);

function myFunc(){
    //here without using strict then this will represent window and myFunc will add in that window
    "use strict" //using this it will show undefined
    console.log(this);
}

myFunc();

//call apply bind



//CALL

function about(player,badminton){
    console.log(this.name,this.age,player);
    }


const user1 = {
    name: 'iuehdiwe',
    age:23
}


const user2 = {
    name: 'sdfisu',
    age: 34,
    // about: function(player){
    //     console.log(this.name,this.age,player)
    // }
}

//we can borrow about method of user2 for user1 and pass context of user1
//using call method
about.call(user2,true,true);

//this can be also done by making different function that putting it into object




//APPLY
//same as call, it use call internally
about.call(user2,[true,true]);


//Bind
//it bind the method to variable, we can use it later
// const func = about.bind(user2,'from bind',true);

// func()


const user3 = {
    name: 'abcCDE',
    age: 34,
    //this will also works 
    about(player){
        console.log(this.name,this.age,player)
    }
}


const func = user3.about.bind(user2,'shs');

func()

//arrow function this is one level up

