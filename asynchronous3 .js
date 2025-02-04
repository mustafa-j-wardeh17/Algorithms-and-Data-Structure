console.log("1️⃣ Synchronous Code: Start Execution");

setTimeout(() => {
    console.log("8️⃣ setTimeout: Executed after main thread & microtasks");
}, 0);

setImmediate(() => {
    console.log("🔟 setImmediate: Executes after I/O but before setTimeout");
});

Promise.resolve().then(() => {
    console.log("3️⃣ Promise then(): Microtask 1");
}).then(() => {
    console.log("5️⃣ Promise then(): Microtask 2");
});

async function asyncFunction() {
    console.log("2️⃣ Inside Async Function");
    await Promise.resolve();
    console.log("4️⃣ Async/Await Resumed");
}
asyncFunction();

function callbackFunction(callback) {
    console.log("6️⃣ Callback Function Started");
    setTimeout(() => {
        console.log("9️⃣ Callback Function Executed");
        callback();
    }, 10);
}

callbackFunction(() => console.log("🔟 Callback Completed"));

Promise.all([
    new Promise((resolve) => setTimeout(() => {
        console.log("7️⃣ Promise.all: Task 1 Finished");
        resolve();
    }, 5)),

    new Promise((resolve) => setTimeout(() => {
        console.log("🔟 Promise.all: Task 2 Finished");
        resolve();
    }, 15)),
]).then(() => console.log("🔟 Promise.all Completed"));

console.log("1️⃣ Synchronous Code: End Execution");



// 💡 Explanation of Execution Order
// 1️⃣ & 2️⃣ - Synchronous Code Runs First
// Logs the start and end of execution immediately.
// 3️⃣ & 5️⃣ - Promise .then() (Microtask Queue)
// Promise .then() executes before setTimeout because it’s in the Microtask Queue.
// 4️⃣ - async/await Execution (Microtask Queue)
// await pauses execution, but when resumed, it follows the Microtask Queue order.
// 6️⃣ - Callback Function Starts (Before Timer Triggers)
// Logs that the function has started but its setTimeout runs later.
// 7️⃣ - setTimeout (Task Queue, Runs Later)
// Runs after all synchronous and Microtask Queue tasks are done.
// 8️⃣ & 🔟 - Promise.all() Tasks
// Promise.all waits for both promises to finish before logging "Promise.all Completed".
// 🔟 - setImmediate() Runs Before setTimeout()
// Since setImmediate() executes after I/O events, it runs before setTimeout() but after Promises.

// ✔ Synchronous code always runs first.
// ✔ Microtask Queue (Promises, Async/Await) runs before setTimeout.
// ✔ Promise.all waits for all promises before resolving.
// ✔ setTimeout (Task Queue) runs after the Microtask Queue.
// ✔ setImmediate executes before setTimeout (Node.js only).

// 1️⃣ Synchronous Code: Start Execution
// 2️⃣ Inside Async Function
// 6️⃣ Callback Function Started
// 1️⃣ Synchronous Code: End Execution
// 3️⃣ Promise then(): Microtask 1
// 4️⃣ Async/Await Resumed
// 5️⃣ Promise then(): Microtask 2
// 8️⃣ setTimeout: Executed after main thread & microtasks
// 🔟 setImmediate: Executes after I/O but before setTimeout
// 7️⃣ Promise.all: Task 1 Finished
// 9️⃣ Callback Function Executed
// 🔟 Callback Completed
// 🔟 Promise.all: Task 2 Finished
// 🔟 Promise.all Completed