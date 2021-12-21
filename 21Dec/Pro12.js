var stud1 = {
    roll : 101,
    name : 'vikas',
    age : 27,
    marks : {
        phy : 56,
        che : 44,
        math  : 67
    }
}

//var stud2 = stud1
var stud2 = {
    ...stud1
}

console.log(stud1)

stud2.age = 100

console.log(stud1)
console.log(stud2)