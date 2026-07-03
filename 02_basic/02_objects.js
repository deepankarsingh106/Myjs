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