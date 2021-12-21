var arr = [33,44,21,32,56,54,21,77,48]


// Fetch all even numbers and store in a new array
// var arr2 = []
// for(let num of arr)
// {
//     if(num%2==0)
//     {
//         arr2.push(num)
//     }
// }

// function filterEven(num)
// {
//     return num%2==0    
// }
// var arr2 = arr.filter(filterEven)

var arr2 = arr.filter((num)=>num%2==0)

console.log(arr)
console.log(arr2)