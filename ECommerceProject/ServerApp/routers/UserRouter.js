const express = require('express')
const mailService = require('./EmailService')
const userModel = require('../models/UserModel')

const bcrypt = require('bcrypt');
const saltRounds = 10;

const router = express.Router()

//http://localhost:8989/user/verify
router.get("/verify",(request,response)=>{
    console.log(request.query)
});

// http://localhost:8989/user/register
router.post("/login",(request,response)=>
{
  console.log(request.body)
  userModel.loginUser(request.body.email,(data)=>{
      if(data==null){
          response.json({status:false,msg:"Invalid Email ID !"})
      }else{
        bcrypt.compare(request.body.password, data.password).then(function(result) {
            if(result)
            {
                if(data.isverify)
                  response.json({status:true,msg:"Success !"})
                else                  
                  response.json({status:false,msg:"Verify your account first !"})
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
        var otp = Math.floor(100000 + Math.random() * 900000);
        mailService.sendOTP(request.body.name,request.body.email,otp,(status)=>
        {
            if(status)
            {
              request.body.otp = otp
              request.body.isverify = false
              userModel.saveUser(request.body,(status,user)=>{
                if(status)
                    response.json({status:true,msg:"Registeration Success !"})
                else
                    response.json({status:false,msg:"Registeration Failed !"})                
              })
            }else{
              response.json({status:false,msg:"Invalid Email ID !"})                
            }
        })
    });
  });
})

module.exports = router