const express = require('express')
const path = require('path')
const cors = require('cors')
const upload = require('express-fileupload')

const categoryRouter = require('./routers/CategoryRouter')
const brandRouter = require('./routers/BrandRouter')
const productRouter = require('./routers/ProductRouter')
const userRouter = require('./routers/UserRouter')
const app = express()

app.use(cors()) // Accepting Request from anywhere
app.use(express.json()) // for receiving JSON data
app.use(upload())

app.use(express.static(path.join(__dirname)))

app.use("/api/category",categoryRouter)
app.use("/api/brand",brandRouter)
app.use("/api/product",productRouter)
app.use("/user",userRouter)

app.listen(8989,function(){
    console.log("http://localhost:8989")
})
