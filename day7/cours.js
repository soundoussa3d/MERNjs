/*//map
const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2); // [2, 4, 6]

//filter
const fruits = ["apple", "banana", "orange"];
const longFruits = fruits.filter(fruit => fruit.length > 5); // ["banana", "orange"]

//reduce
const numbers1 = [1, 2, 3, 4];
const sum = numbers1.reduce((accumulator, number) => accumulator += number, 0); // 10
//console.log(sum);


//1-Array destructuring
const numbers3 = [10, 20, 30];
// extract values the old way
const first = numbers3[0]
const second= numbers3[1]
const third = numbers3[2]

//better extraction
const [first1, second1, third1] = numbers; // first = 10, second = 20, third = 30

//2-Object Destructuring 
const person = { name: "Alice", age: 30 };
// old method of extracting properties
const name = person.name;
const age = person.age;
//new method of extracting properties
const { name1, age1 } = person; // name = "Alice", age = 30


//Async/await

//using chaining
fetch("someapi")
    .then(data => data.json())
    .then(result => console.log("RESULT: ", result))
    .catch(error => console.log('FATAL ERROR: ', error.message))

//using async/AWAIT
async function fetchData() {
    const data = await fetch("https://example.com/data");
    const result = await data.json();
    console.log("RESULT: ", result)
}

//Handle errors with try/catch:
// this code is equivalent to the first example
async function fetchData() {
    try {
     const data = await fetch("https://example.com/data");
     const result = await data.json();
     console.log("RESULT: ", result)
    } catch (error) {
       console.log('FATAL ERROR: ', error.message)
    }
}

//Async = makes a function return a promise 
//await = makes a function wait for a promise

//ES6
//Exporting
export const name3 = 'Alice';
export function greet() {
  console.log('Hello World');
}
export default function createGreeter(name) {
    return `Hello ${name}`
}
//Importing*/
function myFunc(a, b) { return a * b; } 
console.log(myFunc(3, 5));