class Employee
{
    constructor(empId,empName,empSalary)
    {
        this.empId = empId,
        this.empName = empName,
        this.empSalary = empSalary
    }

    show()
    {
        console.log(this.empId,this.empName,this.empSalary)
    }
}

// Function Prototype
// var Employee = function(empId,empName,empSalary)
// {
//     this.empId = empId;
//     this.empName = empName;
//     this.empSalary = empSalary;

//     this.show = function()
//     {
//         console.log(this.empId,this.empName,this.empSalary)
//     }
// }

var ob1 = new Employee(101,"Vikas Verma",45000)
var ob2 = new Employee(102,"Gopal Das Gupta",41000)

ob1.show()
ob2.show()