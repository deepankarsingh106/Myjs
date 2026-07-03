// there are lot of Maths Libraray
console.log(Math)
console.log(Math.abs(4))
console.log(Math.round(4.3))
console.log(Math.round(4.6))
// to control the rounding of the number
// it will now give the next natural number
console.log(Math.ceil(4.2))
// it will give previous natural number
console.log(Math.floor(4.9))

console.log(Math.min(4,5,6,7))
console.log(Math.max(4,5,6,7))


// random value between 0 and 1 in decimal
console.log(Math.random()) 
// especially in the games of dice we need 
// 1 to 10 then we need to multiply by 10
console.log((Math.random()*10) + 1) // +1 as min value we need 1
console.log(Math.floor(Math.random()*10) + 1)

// VERY IMPORTANT
// to get the random value in between of two numbers
// GERNAL FORMULA
const min = 10
const max = 20
// floor will lead to previous natural number
console.log(Math.floor(Math.random() * (max-min+1)) + min)