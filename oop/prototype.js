// Prototypes : is properties of constructer function or created function

// every created function or Objecy has a default property with name prototype


// Hint : Arrow function does not work as a constructor function



console.log(Array.prototype) //There is a prototype for Built In Constructor Array


function sayHello() {
    return 1;
}


//---------------------------------------------
//----Add Properties Or Method To Function-----
//---------------------------------------------

/**
 * constructor.prototype.addPropertyOrMethod=...
 * 
 */

function User(name) {
    this.name = name;
    this.welcome = function () {
        `Hello ${this.name}`
    }

    // new Keyword must usage
    // if (!(this instanceof User)) {
    //     throw new Error("Must Be Called With new Keyword")
    // }
    // -------- or ES6 way
    if (!new.target) {
        throw new Error("Must Be Called With new Keyword")
    }
}

const user1 = new User('Mustafa');
//-------------------------------------
//---->const user2 = User('Ali'); // Error: Must Be Called With new Keyword
//-------------------------------------

// Add Method by using prototype
User.prototype.addTitle = function () {
    return `Mr.${this.name}`
}

console.log(user1.addTitle())


// --------Create propertiy to default --------
const obj1 = {
    title: 'Test',
}

Object.prototype.killswitsh = 'Kill$witsh'
console.log(obj1.killswitsh)



//----------------------------------------------


// creating a custom pattern to String constructor
/**
 * [1] zFill Method To String To Make A Custom Pattern
 * [1] sayYouLoveMe Method To Print 'I Love You ${this}'
 */

String.prototype.zFill = function (width) {
    let res = this;
    while (res.length < width) {
        res = `0${res}`;
    }
    return res
}

console.log("416".zFill(5)) // 00416
console.log("512".zFill(4)) // 0512
console.log("172".zFill(6)) // 000172
console.log("16802".zFill(7)) // 0016802


String.prototype.sayYouLoveMe = function () {
    return `I Love You ${this}`
}

console.log("Mustafa".sayYouLoveMe()) //I Love You Mustafa
console.log("Wardeh".sayYouLoveMe()) //I Love You Wardeh
console.log("Naje".sayYouLoveMe()) //I Love You Naje



/**
 * [1] Every Object Has A Prototype
 * [2] Prototype Chain Ends With Object.prototype
 * [3] In Javascript Function Is Object
 */