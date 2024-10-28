// 1. how to declare variable using let keyword and const keyword

const  name = 'John';
let age = 30;

// 2. 6 basic conditional statements in javascript (==, ===, !=, !==, >, <, >=, <=)
// 2.1 multiple conditions using &&, ||

// using &&
if (condition1 && condition2) {
    
}


// using ||
if (condition1 || condition2 || condition3) {
    
}


// 3. arrary declaration
const name = ['John', 'Jane', 'Mark'];

// index
name[0]

// length
name.length

// push
name.push('Bill')

// pop
name.pop()

// shift
name.shift()

// unshift
name.unshift('Bill')

// splice
name.splice(1, 2)

// slice
name.slice(1, 2)

// sort
name.sort()

// reverse
name.reverse()

// join
name.join('-')




// 4. loop in javascript

// for loop
for (let i = 0; i < name.length; i++) {
    console.log(name[i])
}


// while loop
let i = 0;
while (i < name.length) {
    console.log(name[i])
    i++
}


// foreach
name.forEach(function (item) {
    console.log(item)
})


// map
name.map(function (item) {
    console.log(item)
})


// filter
name.filter(function (item) {
    return item === 'John'
})

// filter using include

name.filter(function (item) {
    return item.includes('J')
})

// every
name.every(function (item) {
    return item === 'John'
})


// reduce
name.reduce(function (total, item) {
    return total + item
}, 0)


// find
name.find(function (item) {
    return item === 'John'
})

// find index
name.findIndex(function (item) {
    return item === 'John'
})

// find using include

name.find(function (item) {
    return item.includes('J')
})


// 5. function in javascript

// function expression
const greeting = function (name) {
    console.log('Hello ' + name)
}

greeting('John')


// arrow function
const greeting = (name) => {
    console.log('Hello ' + name)
}

greeting('John')






// 6. object in javascript

const person = {
    name: 'John',
    age: 30
}


// access object property
person.name


// change object property
person.name = 'Jane'

// add object property
person.job = 'Teacher'

// delete object property
delete person.name


// 7. class in javascript

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}


const person = new Person('John', 30)



// 8. template string in javascript

const name = 'John'
const age = 30
const message = `Hello, my name is ${name} and I am ${age} years old.`



// 9. import and export in javascript

// import
import { name, age } from './person.js'

// export
export const name = 'John'
export const age = 30


// 10. nullish coalescing operator

const name = 'John'
const age = null

const message = name || 'No name'


// 11. rest operator in javascript

const person = {
    name: 'John',
    age: 30,
    job: 'Teacher'
}

const { name, ...details } = person

// 12. spread operator in javascript

const person = {
    name: 'John',
    age: 30,
    job: 'Teacher'
}

const details = {
    ...person,
    name: 'Jane'
}



//13. object destructuring in javascript

const person = {
    name: 'John',
    age: 30,
    job: 'Teacher'
}

const { name, age, job } = person

// 14. create a new array from an older array and add an element

const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4]


const person = {
    name: 'John',
    age: 30,
    job: 'Teacher'
}

const newPerson = {
    ...person,
    name: 'Jane'
}

// 16. rest parameter in javascript

function sum(...numbers) {  
    return numbers.reduce((total, number) => total + number, 0)
}


// 17. destructuring parameter in javascript

function sum({ a, b }) {
    return a + b
}

// 18. array destructuring in javascript

const numbers = [1, 2, 3]
const [a, b, c] = numbers;

//2nd method
const [a,b,c] = [1,2,3]

//3rd method
const [a, b, c, ...numbers] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//4th method
function boxify(num1, num2, num3) {
    const numbers = [num1, num2, num3];
    return numbers;
}

boxify(1, 2, 3);

// example
console.log(boxify(1, 2, 3));
// [1, 2, 3]


// 19. optional chaining in javascript

const person = {
    name: 'John',
    age: 30,
    job: 'Teacher'
}

const name = person?.name


// 20.async await in javascript

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json(); 
    console.log(data);
}

getData()

// 21. Json

const person = {
    name: 'John',
    age: 30,
    job: 'Teacher'
}

// convert object to json
const personJson = JSON.stringify(person);

// convert json to object
const person = JSON.parse(personJson);


// 22. try catch in javascript

try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json(); 
    console.log(data);
} catch (error) {
    console.log(error);
}

// 23. throw in javascript

throw new Error('Something went wrong')

// 24. fetch in javascript

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error)) 


// 25. key value pair in javascript

const person = {
    name: 'John',
    age: 30,
    job: 'Teacher'
}

for (const key in person) {
    console.log(key, person[key])
}

const keys = Object.keys(person)
const values = Object.values(person)


// 26. for of on array like object

const person = {
    name: 'John',
    age: 30,
    job: 'Teacher'
}

for (const key of person) {
    console.log(key)
}



// 27. truthy and falsy values in javascript

// falsy values
false
0
''
null
undefined
NaN


// truthy values
true
1
' '
[]
{}



// 28. ternary operator in javascript

const isActive = true;

const message = isActive ? 'Active' : 'Inactive';

const showUser = () => console.log('Show User');
const hideUser = () => console.log('Hide User');

const action = isActive ? showUser : hideUser;

isActive ? showUser() : hideUser();

isActive && showUser();
isActive || hideUser();




// 29. switch case in javascript

const day = 'Monday' 

switch (day) {
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    case 'Wednesday':
        console.log('Today is Wednesday');
        break;
    case 'Thursday':
        console.log('Today is Thursday');
        break;
    case 'Friday':
        console.log('Today is Friday');
        break;
    case 'Saturday':
        console.log('Today is Saturday');
        break;
    case 'Sunday':
        console.log('Today is Sunday');
        break;
    default:
        console.log('Today is not a valid day');
        break;
}

// 30. local storage in javascript

localStorage.setItem('name', 'John')
localStorage.getItem('name')
localStorage.removeItem('name')
localStorage.clear()


// 31. session storage in javascript

sessionStorage.setItem('name', 'John')
sessionStorage.getItem('name')
sessionStorage.removeItem('name')
sessionStorage.clear()

