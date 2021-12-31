const express = require('express')

const userModel = require('../models/UserModel')

const bcrypt = require('bcrypt');
const saltRounds = 10;

const router = express.Router()

// http://localhost:8989/user/register
router.post("/login",(request,response)=>
{
  console.log(request.body)
  userModel.loginUser(request.body.email,(data)=>{
      if(data==null){
          response.json({status:false,msg:"Invalid Email ID !"})
      }else{
        bcrypt.compare(request.body.password, data.password).then(function(result) {
            if(result){
                response.json({status:true,msg:"Success !"})
            }else{
                response.json({status:false,msg:"Invalid Password !"})
            }
        });
      }
  })
})

// http://localhost:8989/user/register
router.post("/register",(request,response)=>
{
  console.log(request.body)
  bcrypt.genSalt(saltRounds, function(err, salt) 
  {
    bcrypt.hash(request.body.password, salt, function(err, hash) 
    {
        //console.log(hash)
        request.body.password = hash
        //console.log(request.body)
        userModel.saveUser(request.body,(status,user)=>{
            if(status)
                response.json({status:true,msg:"Registeration Success !"})
            else
                response.json({status:true,msg:"Registeration Failed !"})                
        })
    });
  });
})

module.exports = router