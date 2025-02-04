console.log("1️⃣  Synchronous Code: Start Execution");

process.nextTick(() => {
    console.log("5️⃣  process.nextTick: Executed immediately after current operation");
});

setTimeout(() => {
    console.log("9️⃣  setTimeout: Executes after timers and microtasks");
}, 0);

setImmediate(() => {
    console.log("1️⃣ 0️⃣  setImmediate: Executes after I/O events but before next tick");
});

async function asyncFunction() {
    console.log("2️⃣  Inside Async Function");
    await Promise.resolve();
    console.log("6️⃣  Async/Await Resumed");
}
asyncFunction();

Promise.resolve().then(() => {
    console.log("7️⃣  Promise then(): Microtask 1");
}).then(() => {
    console.log("8️⃣  Promise then(): Microtask 2");
});

function callbackFunction(callback) {
    console.log("3️⃣  Callback Function Started");
    setTimeout(() => {
        console.log("1️⃣ 6️⃣  Callback Function Executed");
        callback();
    }, 10);
}

callbackFunction(() => console.log("1️⃣ 7️⃣  Callback Completed"));

async function asyncTaskInPromiseAll() {
    console.log("4️⃣  Async Task in Promise.all Started");
    await new Promise((resolve) => setTimeout(() => {
        console.log("1️⃣ 1️⃣  Async Task in Promise.all Resumed");
        resolve();
    }, 5));
}

Promise.all([
    asyncTaskInPromiseAll(),
    new Promise((resolve) => setTimeout(() => {
        console.log("1️⃣ 2️⃣  Promise.all Task 1 Finished");
        resolve();
    }, 5)),

    Promise.all(
        [
            new Promise((resolve) => setTimeout(() => {
                console.log("1️⃣ 3️⃣  Nested Promise.all Task Finished");
                resolve();
            }, 8))
        ])
        .then(() => console.log("1️⃣ 4️⃣  Nested Promise.all Completed")
        )
]).then(() => console.log("1️⃣ 5️⃣  Outer Promise.all Completed"));

console.log("4️⃣  Synchronous Code: End Execution");



// 1️⃣  Synchronous Code: Start Execution
// 2️⃣  Inside Async Function
// 3️⃣  Callback Function Started
// 4️⃣  Async Task in Promise.all Started
// 4️⃣  Synchronous Code: End Execution
// 5️⃣  process.nextTick: Executed immediately after current operation
// 6️⃣  Async/Await Resumed
// 7️⃣  Promise then(): Microtask 1
// 8️⃣  Promise then(): Microtask 2
// 9️⃣  setTimeout: Executes after timers and microtasks
// 1️⃣ 0️⃣  setImmediate: Executes after I/O events but before next tick
// 1️⃣ 1️⃣  Async Task in Promise.all Resumed
// 1️⃣ 2️⃣  Promise.all Task 1 Finished
// 1️⃣ 3️⃣  Nested Promise.all Task Finished
// 1️⃣ 4️⃣  Nested Promise.all Completed
// 1️⃣ 5️⃣  Outer Promise.all Completed
// 1️⃣ 6️⃣  Callback Function Executed
// 1️⃣ 7️⃣  Callback Completed