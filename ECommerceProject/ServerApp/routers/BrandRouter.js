const express = require('express')
const router = express.Router()

// http://localhost:8989/api/brand/list
router.get("/list",(request,response)=>
{
    response.json([{id:1,name:"Apple"},{id:2,name:"Sony"},{id:3,name:"Samsung"},{id:4,name:"LG"},{id:5,name:"Usha"},{id:6,name:"Bajaj"},{id:7,name:"Orient"},{id:8,name:"VIVO"},{id:9,name:"Panasonic"},{id:10,name:"Crompton"},{id:11,name:"MI"},{id:12,name:"Oppo"},{id:13,name:"Motorola"}])
})

module.exports = router