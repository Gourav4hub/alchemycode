const express = require('express')
const path = require('path')
const cors = require('cors')

const categoryRouter = require('./routers/CategoryRouter')

const app = express()

app.use(cors()) // Accepting Request from anywhere
app.use(express.json()) // for receiving JSON data

app.use("/api/category",categoryRouter)

app.listen(8989,function(){
    console.log("http://localhost:8989")
})