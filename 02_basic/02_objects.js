/*
// singleton
//Object.create // another way of making singelton objects

// objects laterals
// creating the objects

const mySym = Symbol("key1")
// take symbols and objects ki keys me add karo and print kara do ???

const Jsuser ={
    // behind the scene it is tracked as string -> name
    name: "Deeps", // keys -> 0,string or anything
    "Full Name": "Deepankar Singh", // there is no chance u can access it using 
    [mySym]: "mykey1",
    // dot operator
    age: 21,
    location: "Jaipur",
    email:"Deeps123@gmail.com",
    isLoggedIN: false,
    lastLoggedIN: ["Monday","Saturday"]
} // empty objects->{}


console.log(Jsuser.email)
// better practice
// Square Notation for accessing the objects key&values 
console.log(Jsuser["email"])
console.log(Jsuser["Full Name"])

// primitive datatype ->symbols

console.log(Jsuser[mySym])  //an
console.log(typeof Jsuser[mySym])
// it is still not using as the symbols


console.log(Jsuser["email"]) 

//to change the email of the user
Jsuser.email = "chatgpt@gmail.com"
console.log(Jsuser["email"])

// inorder u does not want to change the value of the objects 
// then u have to freeze the objects
// Object.freeze(Jsuser)

Jsuser.email = "chatgpt123@gmail.com"
console.log(Jsuser)


// to add the function to objects but unfreeze the objects
Jsuser.greeting = function(){
    console.log("Hello JS User")
}
Jsuser.greeting2 = function(){
    // if u want to refers the same object then do this.key_name of that object
    // else there can be diffrent objects as well
    console.log(`Hello JS User: ${this["Full Name"]}`)
    console.log(`Your Email_ID is: ${this.email}`)
    console.log(`Your City is: ${this.location}`)
    console.log(`Your Age is: ${this.age}`)

}

console.log(Jsuser.greeting())
console.log(Jsuser.greeting) //output -> [Function (anonymous)]
// this means function execute nahi 
// hua only function ka refrence aya hai

console.log(Jsuser.greeting2())

// NOTE ::-->> 
// in the Most of the time we access the values of the objects using the dot operator 
// and but there will certain instance where u have to extract the 
// value using the Square Brackets[] like "Full Name" or Symbol objects

*/
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*
// now how can u create objects as singelton or create it with help of constructor

const tinderUder = new Object()

// Why not write const tinderUser.id = "123abc"?

 //Because const is only used when declaring a variable, 
 // not when adding a property to an object.

 // What does const actually mean?

 // const means you cannot reassign the 
 // variable to point to a different object.

 // This is allowed:
tinderUder.id = "123abc"
tinderUder.name = "Sammy"
tinderUder.isLoggidIn = false
//console.log(tinderUder)



// this is how u declare user for any app
const regularUser = {
    email: "seome@gmail.com",
    // one objects inside another objects
    fullname:{
        userfullname:{
            firstname: "Deepankar",
            lastname: "Singh"
        }
    }
}


console.log(regularUser.fullname.userfullname.firstname)

// what if full name does not exist then 
// we have to insert? -> fullname?. to just like ternary operator 
// if things exist then this else this later discussed 



// to combine the objects just like array
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",d:"4"}
const obj4 = {5:"e",f:"6"}

// one way
// const obj3 = {obj1,obj2}
//console.log(obj3)

// another way
// now copy all the from obj2,obj4 -> obj1
// now obj1 has now changed
//const obj3 = Object.assign(obj1,obj2,obj4)


 // another way
const obj3 = {...obj1,...obj2}
//console.log(obj3)
// obj1 remain same
// console.log(obj1)

// this is how values come to database
const user = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "h1@gmail.com"
    }
]


// inorder to print all these objects in long array
// using for loop
//console.log(user[1].id)

// console.log(tinderUder)


// here the result is in form of array 
// and now u can use loops to access and change it
console.log(Object.keys(tinderUder))
console.log(Object.values(tinderUder))

// har ek property ko array ki form represent kardia
console.log(Object.entries(tinderUder))


// sometimes when u loop and u dont find the value and 
// then it is not find then it will crase also
// so check it fast 
console.log(tinderUder.hasOwnProperty('isLoggedIn'))

// also see the method on inspect also

*/
// Destructuring of the Objects

const course = {
    coursename : "js in hindi",
    courseprice : "999",
    courseinstructor: "hitesh"
}
// another way of accessing the property
// other than dot,square notation
const {courseinstructor} = course

// we name also name it for our ease
const {courseinstructor:instructor} = course
console.log(instructor)

//REACT this same of doing the structuring 
// const navbar = ({company}) => {

// }

// navbar(company = "Deepankar")


// Destructuring of array is also there 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// API
// we get he value from the backened in form of JSON value 
// JSON ko hi objects kahte hai
// JSON key and values in form of the strings 
// {
//     "name":"hitesh",
//     "coursename" : "js in hindi",
//     "price" :"free"
// }


[
    {},
    {},
    {}
]
// javasctipt object notation (JSON)

// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }

