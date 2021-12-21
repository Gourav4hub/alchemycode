class Student
{
    constructor(roll,name,age)
    {
        this.roll = roll
        this.name = name
        this.age = age
    }
    show(){
        console.log(this.roll, this.name , this.age)
    }
}

class CS extends Student
{
    constructor(roll,name,age,marks)
    {
        super(roll,name,age)
        this.marks = marks
    }
    show(){
        super.show()
        console.log(this.marks)
    }
}

class IT extends Student
{
    constructor(roll,name,age,marks)
    {
        super(roll,name,age)
        this.marks = marks
    }
    show(){
        super.show()
        console.log(this.marks)
    }
}

var ob1 = new CS(101,"Vikas",25,{aws:56,ml:76,db:58})
var ob2 = new IT(102,"Gopal",21,{net:55,cloud:76,db:76})
var ob3 = new CS(103,"Vijay",25,{aws:56,ml:76,db:76})
var ob4 = new IT(104,"Meena",22,{net:35,cloud:44,db:76})
var ob5 = new CS(105,"Pooja",27,{aws:56,ml:76,db:76})
var ob6 = new CS(106,"Aakash",24,{aws:56,ml:76,db:76})
var ob7 = new IT(107,"Reena",26,{net:87,cloud:66,db:76})

var arr = [ob1,ob2,ob3,ob4,ob5,ob6,ob7]

var num = 65;
var arr2 = arr.filter((ob)=>((obj)=>
{
    var marks = obj.marks
    var data = Object.values(marks)
    
    var total = data.reduce((a,b)=>{
        //console.log(a,b)
        return a+b;
    },0);
    //console.log(total)
    var per = total/3; 
    return per
})(ob)>num)

console.log(arr2)