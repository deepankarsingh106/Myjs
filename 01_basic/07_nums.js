/*
It looks like you are working with a constant variable in JavaScript. 
In JavaScript, const is used to declare a block-scoped variable. 
Once you assign a value like 400 to a const, 
the reference is fixed, meaning you cannot reassign
 it to a completely different value or data type later in your code.
*/

const score = 400
console.log(score)

// to convert it to number data type
const balance = new Number(100)
console.log(balance)

/*
Number {100}[[Prototype]]: Number
constructor
: 
ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
0
[[PrimitiveValue]]
: 
100*/

console.log(typeof(balance)) //- > number
console.log(balance.toString()) 

// precision value to get fixed especially in ecoomerce website
console.log(balance.toFixed(2)) 

console.log(balance.toString().length) 
// actually original value does not 
// get converted into the string 
console.log(typeof(balance)) // ->number

const othernumber = 123.4562
const othernumber1 = 123.890
console.log(othernumber.toPrecision(3))
// after decimal it gives to that place
//taking of rounding of the number if next number >= 5
console.log(othernumber.toFixed(1))
console.log(othernumber.toFixed(2))
console.log(othernumber.toFixed(3))

// precision value from the strating  

// if no decimal convert after to expo
console.log(othernumber.toPrecision(2))
// if next is decimal or after the decimal we check for the rounding of the number
console.log(othernumber.toPrecision(3))

console.log(othernumber1.toPrecision(3))
console.log(othernumber1.toPrecision(4))

const hundreds = 1000000
// according to USA standarad
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-ID'))

// MAX_VAL in js = 1.7976931348623157e+308
// MIN_VAL in js = 5e-324
// value that i can store
// MAX_SAFE_INTEGER = 9007199254740991
// MIN_SAFE_INTEGER = -9007199254740991

//Number.EPSILON is a very small number in JavaScript.
//2.220446049250313e-16
//It represents the smallest difference
//between 1 and the next representable floating-point number greater 
//than 1.


// especially for the decimal and for the number which are close to 1.
// not for the large numbers

/*Math.abs(a - b) < Number.EPSILON
then:
If the difference is less than Number.EPSILON → treat the numbers as equal. ✅
If the difference is greater than or equal to Number.EPSILON → treat them as not equal. ❌*/

/*
Rule to remember:
✅ Integers: use ===
✅ Decimal (floating-point) numbers: compare with Math.abs(a - b) < Number.
EPSILON when precision errors are possible.*/