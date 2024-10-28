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

// 18. array distructuring in javascript

const numbers = [1, 2, 3]
const [a, b, c] = numbers;
