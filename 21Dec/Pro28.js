function hello()
{
    console.log("Javascript Training !")
}

//setInterval(hello,1000)
//setTimeout(hello,5000)

var intervalObj = setInterval(hello,1000)

setTimeout(()=>{
    clearInterval(intervalObj)
},6000)