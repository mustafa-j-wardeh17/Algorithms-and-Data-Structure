console.log("1. Synchronous code runs first");

setTimeout(() => console.log("7. setTimeout executed"), 0);

Promise.resolve().then(() => console.log("5. Promise then() executed"));

async function fetchData() {
    console.log("2. Inside async function (before await)");
    await Promise.resolve();
    console.log("6. Async/await executed after promise resolution");
}
fetchData();

Promise.all([
    new Promise((resolve) => { console.log('3. nested before promise reolve'); resolve("8. Promise.all Data 1") }),
    new Promise((resolve) => setTimeout(() => resolve("8. Promise.all Data 1"), 0)),
    new Promise((resolve) => setTimeout(() => resolve("8. Promise.all Data 2"), 0)),
]).then((data) => console.log("8. Promise.all finished:", data));

console.log("4. Synchronous code runs last");

// ----Final Output Order:--------
// 1. Synchronous code runs first
// 2. Inside async function (before await)
// 3. Promise then() executed or await by code line by line if promise first exexute first then the go to await for Async/await functions
// 6. setTimeout executed
// 8. Promise.all finished: ["Promise.all Data 1", "Promise.all Data 2"]


// 1. Synchronous code runs first
// 2. Inside async function (before await)
// 3. nested before promise reolve
// 4. Synchronous code runs last
// 5. Promise then() executed
// 6. Async/await executed after promise resolution
// 7. setTimeout executed
// 8. Promise.all finished: [
//   '8. Promise.all Data 1',
//   '8. Promise.all Data 1',
//   '8
// ]