const express = require('express')

const router = express.Router()

// http://localhost:8989/patient/savepatient
router.post("/savepatient",(request,response)=>
{
    console.log(request.body)
})

module.exports = router