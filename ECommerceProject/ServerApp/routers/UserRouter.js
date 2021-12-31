const express = require('express')
const router = express.Router()

// http://localhost:8989/user/register
router.post("/register",(request,response)=>
{
  console.log(request.body)
})

module.exports = router