class Student
{
    private roll:number;
    private name:String;
    private age:number;
    private marks:number;

    public constructor(roll:number=undefined,name:String=undefined,age:number=undefined,marks:number=undefined)
    {
        this.roll = roll
        this.name = name
        this.age = age
        this.marks = marks
    }

    public show() : void
    {
        console.log("\nRoll : ",this.roll)
        console.log("Name : ",this.name)
        console.log("Age : ",this.age)
        console.log("Marks : ",this.marks)
    }
}

var ob1 = new Student(101,"Vikas",23,343.33)
var ob2 = new Student()

ob1.show()
ob2.show()

//console.log(ob1.roll)

