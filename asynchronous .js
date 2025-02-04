function fetchDataCallback(callback) {
    setTimeout(() => {
        console.log("Callback: Data fetched");
        callback("Callback: Done");
    }, 1000);
}

function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Promise: Data fetched");
            resolve("Promise: Done");
        }, 1200);
    });
}

function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Promise.all: Data 1 fetched");
            resolve("Promise.all: Data 1 Done");
        }, 1000);
    });
}

function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Promise.all: Data 2 fetched");
            resolve("Promise.all: Data 2 Done");
        }, 1500);
    });
}

async function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Async/Await: Data fetched");
            resolve("Async/Await: Done");
        }, 800);
    });
}

async function fetchDataAll() {
    console.log("Starting Promise.all");
    const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log("Promise.all: Both fetched:", data1, data2);
}

async function fetchData() {
    console.log("Starting async/await");
    const data = await fetchDataAsync();
    console.log(data);
}

// Running all async methods
console.log("Starting callback function");
fetchDataCallback((message) => console.log(message));

console.log("Starting Promise function");
fetchDataPromise().then((message) => console.log(message));

console.log("Starting async/await function");
fetchData();

console.log("Starting Promise.all function");
fetchDataAll();



// Starting callback function
// Starting Promise function
// Starting async/await function
// Starting Promise.all function

// Starting async/await
// Starting Promise.all
// Async/Await: Data fetched
// Async/Await: Done
// Callback: Data fetched
// Callback: Done
// Promise.all: Data 1 fetched
// Promise: Data fetched
// Promise: Done
// Promise.all: Data 2 fetched
// Promise.all: Both fetched: Promise.all: Data 1 Done Promise.all: Data 2 Done