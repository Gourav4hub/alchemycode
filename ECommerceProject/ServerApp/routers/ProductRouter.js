const express = require('express')
const path = require('path')
const uuid = require('uuid')

const productModel = require('../models/ProductModel')

const router = express.Router()

// http://localhost:8989/api/product/changestatus
router.post("/changestatus",(request,response)=>
{
    productModel.changeStatus(request.body,(status)=>{
       response.json({status})
    })
})

// http://localhost:8989/api/product/save
router.post("/save",(request,response)=>
{
    var data = request.body

    var uploadFile = request.files.prod_image
    var name = "/uploadfiles/" + uuid.v1() + path.extname(uploadFile.name)
    var dirLocation = path.join(__dirname,"../",name)
    uploadFile.mv(dirLocation)

    data.prod_image = name
    //console.log(data)
    productModel.saveProduct(data,(status,product)=>{
        response.json({status:status,product:product})   
    })    
})
// http://localhost:8989/api/product/list
router.get("/list",(request,response)=>
{
    productModel.fetchProduct((data)=>{
        console.log(data)
        response.json(data)
    })
})

module.exports = router