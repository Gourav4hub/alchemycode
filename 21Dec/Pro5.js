// function hello()
// {
//     //var x = 100
//     function fun()
//     {
//         console.log("Function fun ....")
//     }
//     return fun
// }

function hello()
{    
    return function()
    {
        console.log("Function fun ....")
    } 
}

// var ob = hello()
// ob()
// ob()
// ob()

hello()()



