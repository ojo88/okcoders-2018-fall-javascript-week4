var user1 = {
    firstname: "Joseph",
    lastname: "Okpara",
    address: "4513 N Virginia Ave, OKC, OK 73118",
    phone: "405-476-5098",
    age: 30
}

// console.log(user1.age);

var user2 = {
    firstname: "Trinity",
    lastname: "Statum",
    address: "NW 38th St, OKC, OK 73118",
    phone: "555-111-1111",
    age: 25
}

var weddinglist = [
    'old',
    'new',
    'barrowred',
    'red'
]

// console.log(weddinglist[2]);

// var userList = [
//     user1,
//     user2
// ]

// console.log(userList[1].firstname);

var user3 = {
    firstname: "Deborah",
    lastname: "Gale",
    address: "NW 50th St, OKC, OK 73103",
    phone: "555-222-2222",
    age: 55
}

var user4 = {
    firstname: "Carlos",
    lastname: "Stanfield",
    address: "NW 16th St, OKC, OK 73127",
    phone: "555-333-3333",
    age: 36
}

var addressBook = [
    user1, 
    user2, 
    user3,
    user4
]

function printContact(contact) {
    for(i = 0; i < contact.length; i++)
        {
            console.log("Contact: " + contact[i].firstname + " " + contact[i].lastname)
            console.log(contact[i].address + "\n")
        }
}

var ourFunction = function(thing) {
    for(i = 0; i < thing.length; i++)
    {
        console.log(thing[i].lastname);
    }
}

// function ourConsole() {
//     return function(message){
//         console.log("This is our message out");
//     }
// }

// printContact(addressBook);

// ourFunction(addressBook);

function ourConsole(message1){
    return function(message2){
        console.log("This is our message1 out: " +message1);
        console.log("This is our message2 out: " +message2);
    }
}

var mgs = ourConsole("Hello");
// mgs("goodbye");

// arr1 = addressBook
// func1 = function printName


function forEach(arr1, func1){
    for(var i=0; i < arr1.length; i++){
        // printName(addressBook[i])
        func1(arr1[i]);
    }
}

// addressBook [] = x
function printName(x) {
    console.log(x.firstname, x.lastname);
}

function printAddr(x){
    console.log(x.address);
}

function printContactNew(contact) {
            console.log("Contact: " + contact.firstname + " " + contact.lastname)
            console.log(contact.address + "\n")
}



// forEach(addressBook,printName)
// forEach(addressBook,printAddr)

forEach(addressBook, printContactNew)

var printHello = function(){
    console.log("Hello everyone!!");
}

setTimeout(function(){
    console.log("Hello, you did it!!")
}, 5000);