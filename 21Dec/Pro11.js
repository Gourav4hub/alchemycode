
var students = [ 
{
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
},
{
    roll : 102,
    name : 'meena',
    age : 26,
    marks : {
        phy : 65,
        che : 54,
        math  : 47
    },
    address : [
        {
        location : "LIC Nager" , city : 'dewas' , pincode : 452003
        },
        {
        location : "Veena Colony" , city : 'ujjain' , pincode : 452001
        }
    ]
}
]



for(let stud of students)
{
    console.log(stud.roll, stud.name, stud.age)  
    console.log(stud.marks.phy, stud.marks.che, stud.marks.math)
}