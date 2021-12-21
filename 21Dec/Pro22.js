class Employee
{
    //constructor(empId=0,empName='',empSalary=0.0)
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


var ob1 = new Employee(101,"Vikas Verma",45000);
var ob2 = new Employee();

ob1.show()
ob2.show()


// var x;

// if(x==undefined){

// }