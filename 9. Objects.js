//OBJECTS
//======================================================
//Storing collections of data
//https://javascript.info/object


// Creating an empty object
let user = new Object()
let user = {}

//Creating object with data
let user = {
    name: "John",
    age: "42"
}
//Accessing data in object
alert(user.name) // John
alert(user.age) // 42

//Add data to object
user.isAdmin = true
user.lastName = "Mickelson"

//Square brackets for multiword key
user["last name"] = "Mickelson"

user["last name"] //Mickelson

//Remove data from object
delete user.lastName

//The "for..in" loop
for (key in object) {
    //Loop over every key in object
}

for (let key in user) {
    //Keys
    console.log(key) //name, age, isAdmin

    //Values
    user[key] // John, 42, true
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britian",
    "2": "USA",
    "1": "Finland",
}

for (let code in codes) {
    alert(code)
}


/*TASK*/

//1.
let user = {}

//2.
user.name = "john"

//3.
user.surName = "Smith"

//4.
user.name = "pete"

//5.
delete user.name

/*TASK 2*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let sum = 0
for (let name in salaries) {
    sum = sum + salaries[name] // 100, 160, 130
    sum += salaries[name] // 100, 160, 130
}