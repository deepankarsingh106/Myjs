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


// primitive type
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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// STACK MEMEORY(PRIMITIVE DATA TYPE )
    let myYoutube = "Deeeps"
    let anothername = myYoutube
console.log(myYoutube)
console.log(anothername)
anothername = "hello"
console.log(myYoutube)
console.log(anothername)

// here u observe that change in anothername does not lead to change in myYoutube name
// as only the copy of the name is passed to anothername not the refrence part


// HEAP MEMEORY(NON PRIMITIVE TYPE)
let userone = {
    email:"example@gmail.com",
    upi: "oksbi@123"
}

let usertwo = userone
// here u see you are not getting the copy nut the refrence of userone 
// type and change made in usertwo also get reflected in the userone 
// also
console.log(userone.email)
console.log(usertwo.email)

usertwo.email = "deeps@gmail.com"
// here changes in another got reflected in another also
// as any changes you are doing indirectly reflected in the original value
console.log(userone.email)
console.log(usertwo.email)


