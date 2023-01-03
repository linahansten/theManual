//ARRAYS
//====================================
//Storing ORDERED collections of data
// https://javascript.info/array

//Creating an empty arrays
let arr = new Array()
let arr = []

//Creating array with data
let fruits = ["Apple", "Orange", "Plum"]

//Accessing data in array
// !! Array elements are numbered, starting with ZERO !!

fruits[0] //Apple
fruits[1] //Orange
fruits[2] //Plum

//Replace an element in the array
fruits[2] = "Pear"

//Add a new one to the array
fruits[3] = "Lemon"// ["Apple", "Orange", "Pear", "Lemon"]

//Total count of the elements in array
fruits.length //4
let arr = ["Apple", { name: "john" }, ["Plum", ["Orange"]], function () { alert("hello") }]

arr[1].name //jonas
arr[3]() //hello

//POP
let fruits = ["Apple", "Orange", "Plum"]

alert(fruits.pop()) // remove last item in array "Plum"
alert(fruits) // Apple, Orange

//PUSH
fruits.push("Pear")
alert(fruits) // Apple, Orange, Pear

//SHIFT
fruits.shift() //Remove first item in array "Apple"

alert(fruits) // Orange, Pear

//UNSHIFT
fruits.unshift("Apple")// add Apple to the beginning of array
alert(fruits) // Apple, Orange, Pear


//LOOPS
let fruits = ["Apple", "Orange", "Plum"]

for (let i = 0; i < fruits.length; i++) {
    fruits[i] // Apple, Orange, Plum
}

//for..of
for (let fruit in fruits) {
    fruit // Apple, Orange, Plum
}

const items = []

items.push({
    timestamp: "14:35 8.12 2022",
    text: "Hämta en sten",
    done: false,
})

items.push({
    timestamp: "12:15 7.12 2022",
    text: "Hämta en clumba",
    done: true,
})

[{
    timestamp: "14:35 8.12 2022",
    text: "Hämta en sten",
    done: false,
},
    {
        timestamp: "12:15 7.12 2022",
        text: "Hämta en clumba",
        done: true,
    }]