



class User {

    //static properties
    static counter = 0;


    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;

        // static property just for class not object
        User.counter++;
    }

    getFullName() {
        return `Full Name: ${this.firstName} ${this.lastName}`
    }

    showEmail() {
        return `Your Email Is ${this.email}`
    }

    writeMessage() {
        return `Message From Parent Class`
    }

    // class static method not for object that instance from the class
    // Static Method for the main class
    static sayHay() {
        return `Hello To User Constructor`
    }
    static countObjects = function () {
        // we use this here because this refer to class User when call it
        return `${this.counter} Objects Created`
    }
}



let user1 = new User('Mustafa', 'Wardeh', 'm.w@c.c')
let user2 = new User('Mustafa', 'Wardeh', 'm.w@c.c')
let user3 = new User('Mustafa', 'Wardeh', 'm.w@c.c')

console.log(user1.firstName)
console.log(user1.getFullName()) // Full Name: Mustafa Wardeh
console.log(user1.showEmail()) // Your Email Is m.w@c.c
console.log(user1) // User { firstName: 'Mustafa', lastName: 'Wardeh', email: 'm.w@c.c' }


//-------------------------------------------
//-------------Static Method-----------------
//-------------------------------------------

//try static method with object instanceof User

//console.log(user1.sayHay()) //TypeError: user1.sayHay is not a function

// ------------->
console.log(User.sayHay()) // can use just for class
// ------------->
// ------------->
console.log(User.countObjects()) // can use just for class
// ------------->


//----------------------------------------------------------------
//---------------------------Inheritance--------------------------
//----------------------------------------------------------------


/**
 * [1] extends ---- name of parent class
 * [2] super(x,y,z): add super to constructor with all parent constructor parameters
 * [3] create your own class methods or properties
 * [4] if i write method in parent and write another method in currecnt class
 * it will use the method in current class not parent class
 */
class Admin extends User {

    constructor(firstName, lastName, email) {

        super(firstName, lastName, email); //to import properties and methods from User class
    }

    adminMessage() {
        return `You Are Admin`
    }

    // take it not from parent
    writeMessage() {
        return `Message From Admin Class`
    }

}

let admin1 = new Admin('Mustafa', "Abu Wardeh", "mostafa@mainObj.mm")

console.log(admin1.adminMessage()) //You Are Admin
console.log(admin1.getFullName()) //You Are Admin


//---------------------------------------------------------------------
//-----------------------Getter And Setter-----------------------------
//---------------------------------------------------------------------

/**
 * [1] getter and setter uses for private in general
 * [2] getter and setter using without bracket()
 */

class Book {
    #seiral;
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }

    set setSerial(ser) {
        this.#seiral = ser;
    }
    get getSerial() {
        return this.#seiral;
    }

}

let book1 = new Book('102', 'Robert')
book1.setSerial = '#1720866'

console.log(book1.serial) // cann't access from out of class
console.log(book1.getSerial) // access it using getter dxx 