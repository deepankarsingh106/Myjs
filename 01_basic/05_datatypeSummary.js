const score = 100
console.log(typeof(score))

const scoreValue = 100.3
console.log(typeof(scoreValue))

const isLoggedIn = false
console.log(typeof(isLoggedIn))

const outsideTemp = null
console.log(typeof(outsideTemp))

let userEmail;
console.log(typeof(userEmail))

// You can manually defined variable as a underdefined 
// by having the it equal to underdefined


const id = Symbol('123')
console.log(typeof(id))

const anotherid = Symbol('123')
console.log(typeof(anotherid))

// console.log(id === anotherid)
// console.log(id == anotherid)

const bigNumber = 123467890456789n

// ARRAY ,objects,function
const hero = ["Krishna","naagraj","Spiderman"]

let myObj = {
    name:"Deepankar",
    age: 20,
}

const myFunction = function(){
    console.log("My Function")
}

console.log(typeof(bigNumber))
console.log(typeof(outsideTemp))
console.log(typeof(hero))
console.log(typeof(myFunction))
console.log(typeof(myObj))