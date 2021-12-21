// UnBlocking Function
function add(a,b,callback)
{
    console.log("Javascript Training !")
    for(var x=1;x<998347593;x++){}
    var c = a + b
    callback(c)
}

console.log("Hello Students !")

// CallBack
setTimeout(add,1,55,66,(result)=>{
    console.log("Result : ",result)
}) // 1 : 1 milliseconds

console.log("Alchemy Solution Training !")
console.log("Thanks !")


// $(document).ready(function()
// {
//    $("#b1").click(function(){

//    }); 
// });