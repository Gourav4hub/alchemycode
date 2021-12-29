const express = require('express')
const router = express.Router()

// http://localhost:8989/api/product/save
router.post("/save",(request,response)=>
{
    console.log(request.body)
    console.log(request.files)
    response.json({status:true})   
})

module.exports = router