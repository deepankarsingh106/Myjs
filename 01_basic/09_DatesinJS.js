// let mydate = new Date()
// console.log(`1 -> ` +  mydate.toDateString())
// console.log(`2 -> ` +  mydate.toISOString())
// console.log(`3 -> ` +  mydate.toJSON())
// console.log(`4 -> ` +  mydate.toLocaleDateString())
// console.log(`5 -> ` +  mydate.toLocaleString())
// console.log(`6 -> ` +  mydate.toString())
// console.log(`7 - >` +  mydate.toLocaleTimeString())
// console.log(`8 -> ` +  mydate.toUTCString())
// console.log(`9 -> ` +  mydate.getTimezoneOffset())

// console.log(typeof mydate) // interview


// to declare the specific date

let anydata  =  new Date(2026,5,31) // in this case it will print the next data 
console.log(anydata)
console.log(anydata.toString())

// to create the date in the specific format
let anydate1 = new Date("2025-01-24")
console.log(anydate1.toDateString())


// to create the date in the format MM-DD-YYYY
let anydate2 = new Date("06-10-2005")
console.log(anydate2.toDateString())

// to create the poll and want to get the fastest response then i use this approach
let myTimeStamp = Date.now()
console.log(myTimeStamp) // it is millionsecond time from 1 Jan, 1970

console.log(anydate2.getTime()) // it is time in  millisecond for the this date 
console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))
// to convert it into second /1000 and nearest natural number floor or round

console.log(Math.round(Date.now()/1000))


let mydate = new Date()
console.log(mydate.getDay())
console.log(mydate.getTime())
console.log(mydate.getHours())
console.log(mydate.getMinutes())
console.log(mydate.getSeconds())
console.log(mydate.getFullYear())
console.log(mydate.getMilliseconds())
console.log(mydate.getDate())
console.log(mydate.getMonth() + 1)

console.log(
  mydate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  })
);

// Common Formatting Options
// Option	Values
// weekday	"long", "short", "narrow"
// year	"numeric", "2-digit"
// month	"numeric", "2-digit", "long", "short", "narrow"
// day	"numeric", "2-digit"
// hour	"numeric", "2-digit"
// minute	"numeric", "2-digit"
// second	"numeric", "2-digit"

// This is the standard way to format dates for display in JavaScript without manually building date strings.