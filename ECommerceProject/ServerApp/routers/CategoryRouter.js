const express = require('express')
const categoryModel = require("../models/CategoryModel")
const router = express.Router()

// http://localhost:8989/api/category/list
router.get("/list",(request,response)=>
{
    categoryModel.fetchCategory((data)=>response.json(data))
})

// http://localhost:8989/api/category/save
router.post("/save",(request,response)=>
{
    console.log(request.body)
    categoryModel.saveCategory(request.body,(status,data)=>{
            response.json({status:status,category:data})
    });
})

module.exports = router