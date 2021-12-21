// Javascript Object

// student : roll,name,age,marks

var student = {
    roll : 101,
    name : 'vikas',
    age : 27,
    marks  :345.44
}

console.log(student, typeof student) 
console.log(student.roll, student.name , student.age , student.marks)

var str = JSON.stringify(student) // Object to JSON
console.log(str, typeof str) 

var obj = JSON.parse(str) // JSON to Object
console.log(obj, typeof obj) 