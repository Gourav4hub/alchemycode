// Javascript Object

// student : roll,name,age,marks

var student = {
    roll : 101,
    name : 'vikas',
    age : 27,
    marks : {
        phy : 56,
        che : 44,
        math  : 67
    },
    address : [
        {
        location : "Raj Nager" , city : 'indore' , pincode : 452001
        },
        {
        location : "LIG Colony" , city : 'ujjain' , pincode : 452002
        }
    ]
}

console.log(student, typeof student) 

var str = JSON.stringify(student) // Object to JSON
console.log(str, typeof str) 

var obj = JSON.parse(str) // JSON to Object
console.log(obj, typeof obj) 