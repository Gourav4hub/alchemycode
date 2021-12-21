class Demo
{
    constructor(a=0,b=0)
    {
        this.a = a
        this.b = b
    }

    show(){
        console.log("A : " , this.a, " B : ", this.b)
    }
}

class Sample extends Demo 
{
    constructor(x=0,y=0,a=0,b=0)
    {
        super(a,b)
        this.x = x
        this.y = y
    }
    show(){
        super.show()
        console.log("X : " , this.x, " Y : ", this.y)
    }
}

//var ob = new Sample(44,33,22,66)
//var ob = new Sample(44,33,22)
//var ob = new Sample(44,33)
//var ob = new Sample(44)
var ob = new Sample()
ob.show()

