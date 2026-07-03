const name = "Deeps"
const repocount = 20
// outdated version
console.log(name + repocount + "Values")

// modern ways of doing the strings -> String Interpolation
console.log(`Hello my name is ${name} and my RepoCount is ${repocount}`)

// Advantage of this :
// you can make the changes in go withflow. eg:tolowercase ,touppercase


const gamename = new String('hitesh-hc-com-in')
// to have 0 key-value pair
console.log(gamename[0])
// to have access all the prototype
console.log(gamename.__proto__) //--->{}
// by inserting . you can access all the methods of the string types
console.log(gamename.length) 

// to access all the methods of all protypes
// infact to access all the protype methods you can simply write 
// .name and then methods name instead
// of having .__proto__.name 
console.log(gamename.__proto__.name)
console.log(gamename.name)
console.log(gamename.toLowerCase())
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2)) // position at 2 is t
console.log(gamename.indexOf('t')) // position at 2 is t

/*String {'Hello'}
    0: "H"
    1: "e"
    2: "l"
    3: "l"
    4: "o"
    length: 5
[[Prototype]]: String 
    anchor: ƒ anchor()  at: ƒ at()
    big: ƒ big()
    blink: ƒ blink()
    bold: ƒ bold()
    charAt: ƒ charAt()
    charCodeAt: ƒ charCodeAt()
    codePointAt: ƒ codePointAt()
    concat: ƒ concat()
    constructor: ƒ String()
    endsWith: ƒ endsWith()
    fixed: ƒ fixed()
    fontcolor: ƒ fontcolor()
    fontsize: ƒ fontsize()
    includes: ƒ includes()
    indexOf: ƒ indexOf()
    isWellFormed: ƒ isWellFormed()
    italics: ƒ italics()
    lastIndexOf: ƒ lastIndexOf()
    length: 0
    link: ƒ link()
    localeCompare: ƒ localeCompare()
    match: ƒ match()
    matchAll: ƒ matchAll()
    normalize: ƒ normalize()
    padEnd: ƒ padEnd()
    padStart: ƒ padStart()
    repeat: ƒ repeat()
    replace: ƒ replace()
    replaceAll: ƒ replaceAll()
    search: ƒ search()
    slice: ƒ slice()
    small: ƒ small()
    split: ƒ split()
    startsWith: ƒ startsWith()
    strike: ƒ strike()
    sub: ƒ sub()
    substr: ƒ substr()
    substring: ƒ substring()
    sup: ƒ sup()
    toLocaleLowerCase: ƒ toLocaleLowerCase()
    toLocaleUpperCase: ƒ toLocaleUpperCase()
    toLowerCase: ƒ toLowerCase()
    toString: ƒ toString()
    toUpperCase: ƒ toUpperCase()
    toWellFormed: ƒ toWellFormed()
    trim: ƒ trim()
    trimEnd: ƒ trimEnd()
    trimLeft: ƒ trimStart()
    trimRight: ƒ trimEnd()
    trimStart: ƒ trimStart()
    valueOf: ƒ valueOf()
    Symbol(Symbol.iterator): 
    ƒ [Symbol.iterator]()
    [[Prototype]]: Object
    [[PrimitiveValue]]: ""
    [[PrimitiveValue]]: "Hello" 
*/
// like this many


// to string to break or santize it 

const newString = gamename.substring(0,4) //0 -> 3 substring
console.log(newString)
 // in slice u can do the positive as well as negative number
 // in case of negative number it start in reverse directions
 // -1 from the last so i -> -8 to e -> 3 from the front   
const anotherString = gamename.slice(-8,4)
console.log(anotherString)

// in case of substring negative value will 
// be ignored and will start form the 0

const newsString = gamename.substring(0,-9) // ans => {}
console.log(newsString)

const newString1 = "    Deeps    "
console.log(newString1)
// remove all the starting and ending space from the strings 
console.log(newString1.trim())

const url = "https://hitesh.com/hitesh%20123"
// first -> you want to replace
// second -> u want to replace with whom
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
// if you want array from the string to get split on the basis of something
// then do split(seprator,limit)
// seprator -> on the basis of what
// limit ->  An integer that limits the number of splits.Items after the limit are excluded.
console.log(gamename.split('-')) // -> [ 'hitesh', 'hc', 'com', 'in' ]
console.log(gamename.split('-',2)) // -> [ 'hitesh', 'hc' ]

let numb = 5;
let text = numb.toString();
let padded = text.padEnd(4,"0");
console.log(padded)

let text1 = "The rain in SPAIN stays mainly in the plain";

// A search for "ain" using a regular expression:
// simply search it 
console.log(text1.match(/ain/))

// A global search for "ain":
console.log(text1.match(/ain/g))

// A global, case-insensitive search
console.log(text1.match(/ain/gi))


/*
Flag	Description
/g	Performs a global match (find all)
/i	Performs case-insensitive matching
/u	Enables Unicode support (new 2015)
*/