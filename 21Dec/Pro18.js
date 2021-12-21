var arr = [33,44,21,32,56,54,21,77,48]

// create new array from older array but i want to change
// all odd number (num*10) all even number (num*5)

// var arr2 = []
// for(let num of arr)
// {
//    if(num%2==0)
//     arr2.push(num*5)
//    else
//     arr2.push(num*10) 
// }

// function changeArray(num)
// {
//     if(num%2==0)
//         return num*5
//     else
//         return num*10  
// }
// var arr2 = arr.map(changeArray)

var arr2 = arr.map((num)=>num%2==0?num*5:num*10)

console.log(arr)
console.log(arr2)