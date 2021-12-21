function add(a,b)
{
    var c = a + b
    console.log("Addition : ",c)
}
function mul(a,b)
{
    var c = a * b
    console.log("Multiply : ",c)
}
function hello(a,b,ob)
{
    console.log("Good Morning !")
    ob(a,b)
    console.log("Hello Everyone ! I am Gourav.")
}

//hello(34,10,add)
//hello(34,10,mul)

hello(55,33,function(a,b)
{
    var c = a - b
    console.log("Result : ",c)
}) // Annonymous function



