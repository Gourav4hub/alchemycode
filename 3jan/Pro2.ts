class Employee
{
    private name:String;
    private phone:String;

    public constructor(name:String,phone:String){
        this.name = name
        this.phone = phone
    }

    public getName():String { return this.name }
    public getPhone():String { return this.phone }

    public setName(name:String){ this.name = name}
    public setPhone(phone:String){ this.phone = phone}

    public show():void{
        console.log("\nName : ",this.name)
        console.log("Phone : ",this.phone)
    }
}

class Manager extends Employee
{
    private department:String;
    private salary:number;

    public constructor(name:String,phone:String,
        department:String,salary:number){
        super(name,phone)
        this.department = department
        this.salary = salary
    }

    public getDepartment():String { return this.department }
    public getSalary():number { return this.salary }

    public setDepartment(department:String){ this.department = department}
    public setSalary(salary:number){ this.salary = salary}

    public show():void
    {
        super.show()
        console.log("Department : ",this.department)
        console.log("Salary : ",this.salary)
    }
}

var ob1 = new Manager("Vikas","90138923123","Sales",34500)
ob1.show()