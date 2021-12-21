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

var stud2 = {
    ...stud1 ,
    phone : "9827348923",
    city : 'indore'
}

console.log(stud1)
console.log(stud2)