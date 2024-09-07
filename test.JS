// JS BASIC SYNTAX

// 1. DECLARING AND ASSIGNMENTS OF VARIABLE

let name = "Max"; // let / variable are used for values that can change
let age = 29;
let hasHobbies = true;

const nameThatCannotChange = "Max" // const / constants are used for values that should not change
// meaning const nameThatCannotChange = "Max"; cannot be change in the entire

//* CONDTIONAL STATEMENTS
if(hasHobbies) {
    console.log("I have hobbies");
}

if(age > 25){
    console.log("You are older than 25");
}else if(age < 25){
    console.log("You are younger than 25");
}else{
    console.log("You are 25 years old");
}

switch(name) {
    case "Max":
        console.log("You are Max");
        break; // break is used to exit switch statement
    default: // default is used when none of the cases are met
    console.log("You are not Max");
}

// 2. PRINTING THE CONSOLE

console.log(name);
console.log(age);
console.log(hasHobbies);

console.log(nameThatCannotChange);

console.log('My name is ${name} and I am ${age} years old.'); // Output: My name is Max and I am 29 years old. // '${name}' this is a example of string interpolation

// 2. ARRAY DECLARATION

let hobbies = ["Sports", "Cooking"];

// printing the array
console.log(hobbies); //Output: ["Sports", "Cooking"]
// accessing an element in the array
console.log(hobbies[0]); //Output: Sports

for (let hobby of hobbies) {
    console.log(hobby);
}

// adding an element to the array
hobbies.push("Programming");

console.log(hobbies); // Output : ["Sports", "Cooking", "Programming"]

// * MAPPING AN ARRAY
// mapping is used to loop through an array and modify the elements
hobbies.map((hobby) => {
    hobby = hobby + " is fun";
});

console.log(hobbies); // Output: ["Sports is fun", "Cooking is fun", "Programming is fun"]

// 3. OBJECT DECLARATION

let person = { //
    name: "Max", // this is a property/field
    age: 29, // this is a property/field
    hasHobbies: true, // this is a property/field
    greet(){ // this is a method/function of the object
        console.log("Hello, I am " + this.name); // 'this' refers to the object itself
    }
};

// accessing object properties
console.log(person.name); // Output: Max
console.log(person.age); // Output: 29
console.log(person.hasHobbies); // Output: true

// 4. FUNCTION DECLARATION

function myFunction() {
    // code
    console.log("Hello");
}

// calling the function
myFunction(); // Output: Hello

const myFunctionArrow = () => {
    //code
    return "Hello"; // RETURN is used to return a valuefroam a function, you can return a string, number, boolean, array, object etc
    // return stops the function from executing further
};

// ! in functions, you can add variables, id statements, loops, arrays, object etc
//calling the function
console.log(myFunction()); // Output: Hello

// * ADDING PARAMETERS/ARGUMENTS TO FUNCTIONS

function describeStudent(name, age) { // this is a function that takes in two parameters/arguments
    console.log("This person is "  + name + " and is " + age + " years old");
}

describeStudent(name,age); // Output: This person is Max and is 29 years old


// * ANOTHER WAY TO WRITE A FUNCTION USING ARROW FUNCTION
const describeStudentArrow = (name, age) => {
    return 'This person is ${name} and is ${age} years old';
};

console.log(describeStudent(name, age)); // Output: This person is Max and is 29 years old