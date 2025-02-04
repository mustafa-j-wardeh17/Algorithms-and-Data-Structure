console.log("1️⃣  Synchronous Code: Start Execution");

process.nextTick(() => {
    console.log("5️⃣  process.nextTick: Executed immediately after current operation");
});

setTimeout(() => {
    console.log("9️⃣  setTimeout: Executes after timers and microtasks");
}, 0);

setImmediate(() => {
    console.log("1️⃣ 1️⃣  setImmediate: Executes after I/O events but before setTimeout with time more than 0");
});

Promise.resolve().then(() => {
    console.log("6️⃣  Promise then(): Microtask1");
}).then(() => {
    console.log("8️⃣  Promise then(): Microtask 2");
});

async function asyncFunction() {
    console.log("2️⃣  Inside Async Function");
    await Promise.resolve();
    console.log("7️⃣  Async/Await Resumed");
}
asyncFunction();

function callbackFunction(callback) {
    console.log("3️⃣  Callback Function Started");
    setTimeout(() => {
        console.log("1️⃣ 2️⃣️  Callback Function Executed");
        callback();
    }, 10);
}

callbackFunction(() => console.log("1️⃣ 3️⃣  Callback Completed"));

Promise.all([
    console.log("4️⃣  *  Promise.all: Started"),
    new Promise((resolve) => setTimeout(() => {
        console.log("1️⃣ 0️⃣  Promise.all: Task 1 Finished");
        resolve();
    }, 0)),

    new Promise((resolve) => setTimeout(() => {
        console.log("1️⃣ 4️⃣  Promise.all: Task 2 Finished");
        resolve();
    }, 15)),
    console.log("4️⃣  **  Promise.all: Ended"),
]).then(() => console.log("1️⃣ 5️⃣  Promise.all Completed"));

console.log("4️⃣  ***  Synchronous Code: End Execution");

