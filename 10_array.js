const myArr = [0,1,8,7,9,5]
const fruits= ["apple", "Mango", "banana"]
const myArr2 = new Array(1, 2, 3, 4, 5)
//console.log(myArr[3]);


// Array Method

// myArr.push(2)
// myArr.pop()  //removes last element

// myArr.unshift(6)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// slice and splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3) //prints 1 2 and 3 isnt printed

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) // removes all the string from 1 to three ie. 1, 8, 7 and prints remaining
console.log("C", myArr);
console.log(myn2);