const express = require('express')
const mailService = require('./EmailService')
const userModel = require('../models/UserModel')
const jwt = require('../JWT')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const router = express.Router()

//http://localhost:8989/user/verify
router.get("/verify",(request,response)=>{
    console.log(request.query)
    response.json({status:true})
});

// http://localhost:8989/user/updateProfile
router.post("/updateProfile",(request,response)=>
{
  console.log(request.body)
})

// http://localhost:8989/user/getUser
router.post("/getUser",(request,response)=>
{
   jwt.authenticateToken(request,(data)=>{    
     if(data.status)
     {
        userModel.getUser(request.user,(userdata)=>
        {
          var token = jwt.generateAccessToken(request.user)
          response.json({status:true,user:userdata,token:token})
        })
     }else{
       response.json({status:false,code:data.code})
     }
   });
})

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
                {
                  var token = jwt.generateAccessToken(data._id)
                  response.json({status:true,msg:"Success !",token:token,username:data.name})
                }
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