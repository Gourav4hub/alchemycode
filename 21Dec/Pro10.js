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


for(let addr of student.address)
{
    console.log(addr.location, addr.city, addr.pincode)
}
