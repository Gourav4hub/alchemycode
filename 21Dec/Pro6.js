function fun1()
{
    console.log("Fun1 Executed !")
    console.log("Good Morning !")
}

function hello(ob) // High Order Function
{    
    return function()
    {
        console.log("Alechmy Solution !")
        ob()
        console.log("Hello everyone !")
    } 
}

var abc = hello(fun1)
abc()



