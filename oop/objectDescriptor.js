/**
 * Object meta data
 * Usage => Object.defineProperty(myObject,"propertyKey",{
 *  writable: true or false,
 *  enumrable: true or false,
 *  configurable: true or false,
 *  value:value of object key,
 * })
 * 
 * [1] writable: true "can change the value" , false => readable cann't change value 
 * [2] enumrable: to be "show in for" loop 
 * [3] configurable: to make the key value "deletable" or not && make any configuration show error if false
 */

const myObject = {
    a: 1,
    b: 2
}

Object.defineProperty(myObject, "c", {
    writable: true,
    configurable: true,
    enumerable: false,
    value: 1720
})

// ------------------------------------
// --------------Writable--------------
// ------------------------------------
myObject.c = 172000;
console.log(myObject.c)//172000



// ------------------------------------
// --------------Enumrable-------------
// ------------------------------------

// enumrable false
//a: 1
//b: 2
for (i in myObject) {
    console.log(`${i}: ${myObject[i]}`)
}


// ------------------------------------
// ----------Configurable--------------
// ------------------------------------


Object.defineProperty(myObject, "c", {
    writable: true,
    configurable: false,
    enumerable: true,
    value: 1720
})
console.log(delete myObject.c) // false because configrable false



// after configrable we can't change the key property
// and will show error

// Object.defineProperty(myObject, "c", {
//     writable: true,
//     configurable: true,
//     enumerable: true,
//     value: 1720
// })

//--------------------------------------------------------------
//------------------define properties---------------------------
//--------------------------------------------------------------


let obj2 = {
    name: 'mustafa'
}

Object.defineProperties(obj2, {
    university: {
        writable: false,
        configurable: true,
        enumerable: true,
        value: "PPU"
    },
    grade: {
        configurable: true,
        enumerable: true,
        writable: true,

        value: "A"
    },
    state: {
        writable: true,
        configurable: true,
        enumerable: false,
        value: "wad elharia"
    }
})



//===> Object.keys(myObject) <=== Gives object enumrable key 
console.log(Object.keys(obj2)) //[ 'name', 'university', 'grade' ]


//===> Object.getOwnPropertyDescriptor(myObject,'key') <=== Gives me key descriptor
console.log(Object.getOwnPropertyDescriptor(obj2,'university')) //{ value: 'PPU', writable: false, enumerable: true, configurable: true }       







/**
 * [1] Object.getOwnPropertyDescriptor(myObject,'key')
 * [2] Object.keys(myObject)
 * [3] Object.defineProperties(myObject,{{},{}})
 */