// ? Async functions are a way to work with asynchronous code in a more synchronous way. They are built on top of promises and syntatic sugar for promises.

console.log("Ordering your pizza...");

// Creating a promise
const pizzaPromise = () => {
    return new Promise((resolve, reject) => {
        //resolve and reject are callback functions
        // what is callback function?
        // a callback function is a function that is passed as an aragument to another function, to be "called back" at a later time.
        let order  = true;

        if (order){
            setTimeout (() => { // setTimeout is used to simulate a delay
                resolve("After 5 seconds, Pizza delivered!");
            }, 5000);
        }else {
            
            setTimeout(() => { // setTimeout is used to simulate a delay
                reject("After 5 second, Pizza not delivered!");
            }, 5000);
        }
    });
};
// calling the function with a promise
// use.then() to handle the resolved promises
// use.catch() to handle the rejected promises
pizzaPromise()
.then ((result) =>{
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

console.log("Waiting for your pizza....");
// Terminology
// Promise: An object that represents the eventual completion (or failure) of an asynchronous operation and its resulting values.
// Resolve: A callback function that is used to when the promise is fulfilled.
// Reject: A callback function that is used when the promises is rejected.
// .then(): A method that is used to handle the resolved promise.
// .catch(): A  method that is used to handle the rejected promise.