// Defining Objects
// [1] Object Literal => create object
// [2] With New Keyword => create object
// [3] With Object.create() => copy from another object
// [4] With Object.assign() => copy from another objects to target

// -------------------------------------------------
// -----------------Object Literal------------------
// -------------------------------------------------
let user = {
    firstName: 'Mustafa',
    lastName: 'Wardeh',
    getFullName: function () {
        return `Full Name: ${this.firstName} ${this.lastName}`
    },
    addresses: {
        ps: "Palestine",
        usa: "California",
        ksa: "Riyadh",
        getMainAddress: () => {
            return `Main Address Is In ${user.addresses.ps}`
        }
    }
}

// Two Ways to read properties and method
// [1] Dot Notation 
// [2] Square Bracket
console.log(user['getFullName']())
console.log(user.getFullName())

//Object Inside Object
console.log(user.addresses.ps)
console.log(user.addresses.getMainAddress())


// -------------------------------------------------
// -------------------New Keyword-------------------
// -------------------------------------------------

//create new object without any properties and methods
const user2 = new Object()

// creating properties and methods
user2.fName = 'Kill$witsh'
user2.lName = '$...'

user2.entireName = function () {
    return `Entire Name: ${this.fName} ${this.lName}`
}

console.log(user2.entireName())

user2.programming = new Object()
user2.programming.lang = ['c', 'c#', 'c++', 'java', 'python', 'javascript', 'matlab']


console.log(user2.programming.lang[3])


// -------------------------------------------------
// ----------------Object.create()------------------
// -------------------------------------------------

let mainObj = {
    hasDiscount: false,
    showMsg: function () {
        return `You${this.hasDiscount ? "" : " Don't"} Have Discount`
    }
}

console.log(mainObj.showMsg())


// --------- Create Object From Another Object -----

const newMainObj = Object.create(mainObj)

newMainObj.hasDiscount = true;
console.log(newMainObj.showMsg())



// -------------------------------------------------
// ----------------Object.assign()------------------
// -------------------------------------------------

let src1 = {
    val1: '1',
    val2: '2',
    method1: function () {
        return `${this.val1}`
    }
}
let src2 = {
    val3: '3',
    val4: '4',
    method4: function () {
        return `${this.val4}`
    }
}

let src3 = Object.assign({}, src1, src2)
console.log(src3)


let src4 = Object.assign({ val17: 17 }, src3)
console.log(src4)
// {
//     val17: 17,
//     val1: '1',
//     val2: '2',
//     method1: [Function: method1],
//     val3: '3',
//     val4: '4',
//     method4: [Function: method4]
//   }


//---------------------------------------------------------------------
//---------------------------Delete Operator---------------------------
//---------------------------------------------------------------------

// For Deleting Properties and Methods not Entire Object

const items = {
    name: "item1",
    getItem: function () {
        return this.name
    }
}

delete items; // Not Working For Deleting Entire Object
console.log(items)

delete items.getItem;
console.log(items) //{ name: 'item1' }


// -------------------------------------------------
// ----------------Object.freeze()------------------
// -------------------------------------------------

// In Object.freeze(obj) we can't delete properties in freeze object

const item2 = {
    name: "item2",
    getItem: function () {
        return this.name
    }
}

const freezeObject = Object.freeze(item2)


delete freezeObject.name; // does not work for freeze object
console.log(item2)


// -------------------------------------------------
// ---------------For Loop In Object----------------
// -------------------------------------------------

const cart = {
    phone: 'Iphone11',
    bag: 'guicci',
    electronics: {
        laptop: ['omen15', 'hp2025'],
        pc: 'core i9 11 gen rtx 3080'
    },
}

//-----  for(let key in objName) console.log(objName[key])

for (let key in cart) {
    if (key === 'electronics') {
        for (let key2 in cart[key]) {
            console.log(cart[key][key2])
        }
    } else {
        console.log(cart[key])

    }
}