class Demo
{
    fun1(){
        console.log("Demo Fun1 ..... ")
    }
    fun2(){
        console.log("Demo Fun2 ..... ")
    }
    fun3(){
        console.log("Demo Fun3 ..... ")
    }
}
class Sample extends Demo
{
    hello()
    {
        console.log("Sample Hello ....")
    }
    fun2()
    {
        console.log("Sample Fun2 ..... ")
    }
    fun3(){
        super.fun3()
        console.log("Sample Fun3 ..... ")
    }
}

var ob = new Sample()
ob.fun1()
ob.fun2()
ob.fun3()
ob.hello()