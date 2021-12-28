const express = require('express')
const path = require('path')
const cors = require('cors')
const patientRouter = require("./server/routers/PatientRouter")

const app = express()

app.use(cors()) // Accepting Request from anywhere

app.use(express.json()) // for receiving JSON data

app.use("/patient",patientRouter)

app.listen(8989,function(){
    console.log("http://localhost:8989")
})