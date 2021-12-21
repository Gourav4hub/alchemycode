function fun1()
{
    console.log("My Fun1 is executed .... ")    
}
function fun2()
{
    console.log("My Fun2 is executed .... ")    
}

function hello(ob)
{
    console.log("Good Morning !")
    //console.log(ob)
    ob()
}

//var x = 100

hello(fun1)
hello(fun2)
