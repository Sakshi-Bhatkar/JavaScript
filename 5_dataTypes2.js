// Primitive
// 7 types: String, Number,boolean,null,undefined,Symbol,BigInt
 let name = "sakshi"
 let enpId=3455
 const isLoggedIn = false
 const outsideTemp = null
 let userEmail; //undefined
 
 const id = Symbol('345')
 const anId = Symbol('345')
 console.log(id === anId) // this is false even if the value is same
 console.log(typeof(anId));

 const BigInt = 324352436546435234n


// Reference - Non Primitive

//Array,Object,functions

const heros = ["shaktiman","dogo","hunk"];
let myObj = {
    name: "sk",
    age : 22
}

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof(myFunction));  //non primitive always return obj , function returns function only but is called obj function
