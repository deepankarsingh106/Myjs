// Arrays 
const myArr = [0,1,2,3,4,5]
//console.log(myArr[0])



//console.log(myHeros[0])

const myArr2 = new Array(1,2,3,4,5,6,7)

Arrays also support prototype 
console.log(myArr2.length)


METHODS of Arrays
myArr.push(6)
console.log(myArr)

myArr.push(7)
console.log(myArr)

myArr.pop()
console.log(myArr)

it will basically push the element at the front of the array 
alll the element will get pushed by one on right side
myArr.unshift(9)
console.log(myArr)
// we remove the first element 
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))

console.log(myArr.indexOf(9))

console.log(myArr.indexOf(3))
//it will basically add all elements of array to string newArr
const newArr = myArr.join()
console.log(newArr) // it is string which is looking like a array
console.log(typeof newArr)


// slice,splice
// important
console.log("A" ,myArr)
// it return the elements from index 3 to 4 and
//  it does not manupilate the original array

const myn1 = myArr.slice(3,5)
console.log(myn1)

console.log("B",myArr)
// it return the elements from index 1 to 3 and 
// cut these elements from the original array 
const myn2 = myArr.splice(1,3)
console.log(myn2)

console.log("C",myArr) // arrays changes



const myHeros = ["Krishna","Deeps","Deepankar"]
const dc = ["superheros","flash","batsman"]
//myHeros.push(dc) // pushed one array into the another array
//console.log(myHeros)
// merge two array into one array
const allhero = myHeros.concat(dc)
console.log(allhero)


//spread operator array
// it just like glass ko tod kar bekhar dena
const allnewhero = [...myHeros,...dc]
console.log(allnewhero)

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// here we have to give the exact depth inside the flat to
// as it will then break array upto that depth only 
//  Returns a new array with all sub-array elements
//  concatenated into it recursively up to the specified depth.
const arrayfromanother = anotherarray.flat(Infinity)
// since we have to break all -> Infinity
console.log(arrayfromanother)

// check if there is an array
console.log(Array.isArray("Deeps"))
// to will convert it into the array
// anything you give it will convert it to array
console.log(Array.from("Deeps"))

// Interseting -> INTERVIEW
console.log(Array.from({name:"hitesh"})) // -> []
// you have to specify that you have to make the array 
// of the key or value otherwise it will return []

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

//Returns a new array from a set of elements.
console.log(Array.of(score1,score2,score3,score4))

// imp -> spread operator,flat,of,from,

