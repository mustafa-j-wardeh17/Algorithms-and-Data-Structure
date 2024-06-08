// Reduce The Code Of Created Objects
// And Create These Object Just In Few Code Lines


// Recomended To Make First Letter In Uppercase
function Phone(serial, color, price) {
    this.serial = serial;
    this.color = color;
    this.price = price;
}

//  ------------------------------------------------
//  ----------------New Keyword---------------------
//  ------------------------------------------------
let phone1 = new Phone('f552s2', 'red', 1400)
let phone2 = new Phone('f52ss2', 'silver', 1100)
let phone3 = Phone('b417208', 'purple', 1500) //not instanceOf My Phone constructor function

console.log(phone1)
//{ serial: 'f552s2', color: 'red', price: 1400 } create object in just one line
console.log(phone1.color)




console.log(phone1 instanceof Phone)
console.log(phone2 instanceof Phone)
console.log(phone3 instanceof Phone) // false not instanceOf My constructor function

console.log(phone1.constructor === Phone)
console.log(phone2.constructor === Phone)
//console.log(phone3.constructor === Phone)


/**
 * [1] Dealing With Properties
 * [2] Dealing With Methods
 */

function User(name, age, email, showEmail, country) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.showEmail = showEmail;
    this.email = email;
    this.fullName = function () {
        return `Full Name: ${this.name}`;
    }
    this.ageInDays = function () {
        return this.age * 365;
    }
    this.updateName = function (newName) {
        //if age more than 18 update name
        if (this.age > 18) {
            this.name = newName;
        } else {
            console.log("Oops: You Can't Update Your Name If Your Age Is Less Than 18")
        }
    }
    this.showEmail = function () {
        if (this.showEmail) {
            return `Email Is: ${this.email}`;
        } else {
            return `Oops: Date Is Private~`
        }
    }
}

const user1 = new User('Mustafa Wardeh', 24, 'm.2@bk.ru', true, 'PS')

console.log(user1.ageInDays())

// Internal Method To change the name of user
user1.updateName('Mustafa Abu Wardeh')

console.log(user1.fullName())


console.log(user1.showEmail())


//--------------------------------------------------
//---------------Built In Constructor---------------
//--------------------------------------------------

/**
 * [1] new Number(number)
 * [2] new String(string)
 * [3] new array(...items)
 */

const obj1 = { a: 1 }
const obj2 = new Object({ a: 1 })
const num1 = 1;
const num2 = new Number(1);

const arr1 = [1, 2, 3, 4, 5]
const arr2 = new Array(1, 2, 3, 4, 5)

const str1 = 'Mustafa'
const str2 = new String('Mustafa')
console.log(`
Object:\t${obj1.a}\t${obj2.a}
\nNumber:\t${num1}\t${num2}
\nArray:\t${arr1}\t${arr2}
\nString:\t${str1}\t${str2}
`)