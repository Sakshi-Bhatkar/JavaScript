const name = "sakshi"
const repoCount= 15
console.log(name+"'s"+ " repository Count is "+ repoCount);

console.log(`Hello this is ${name}, my repo count is ${repoCount}`);


const gameName = new String(`sakshiSB`)

/*console.log(gameName[3]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.length);
console.log(gameName.indexOf('s'));*/

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,5 ) // -6 means starting from last
console.log(anotherString);

const url = "https://github.com/Sakshi-Bhatkar/JavaScript"

console.log(url.replace('JavaScript','PracticeJS'));

