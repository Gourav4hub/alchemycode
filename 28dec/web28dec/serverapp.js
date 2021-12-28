const express = require('express')
const path = require('path')

const patientRouter = require("./server/routers/PatientRouter")

const app = express()

app.use(express.static(path.join(__dirname,"build")))

app.use("/patient",patientRouter)

app.listen(8989,function(){
    console.log("http://localhost:8989")
})