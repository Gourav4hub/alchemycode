const mongooseConnection = require('./DB')
var mongoose = require('mongoose');

class User
{
    userSchema = mongoose.Schema({        
        name: String,
        phone: String,
        email: String,
        password: String,
        address : Array,
        otp : Number,
        isverify : Boolean
    });

    getUser = (userid,callback)=>
    {
        var model = mongoose.model("user",this.userSchema,"user");
        mongooseConnection(conn=>{
            conn.once('open', function() 
            {
                var obj = model.findOne({_id:userid})
                obj.exec((err,data)=>{
                    conn.close()
                    if(err)
                        callback(false)
                    else
                        callback(data) 
                });
             })
        })
    }
    
    loginUser = (email,callback)=>
    {
        var model = mongoose.model("user",this.userSchema,"user");
        mongooseConnection(conn=>{
            conn.once('open', function() 
            {
                var obj = model.findOne({email:email})
                obj.exec((err,data)=>{
                    conn.close()
                    if(err)
                        callback(false)
                    else
                        callback(data) 
                });
             })
        })
    }

    saveUser = (data,callback)=>
    {       
        var model = mongoose.model("user",this.userSchema,"user");
        mongooseConnection(conn=>{
            conn.once('open', function() 
            {
                var ob = new model(data)
                ob.save(function (err,user) {
                    console.log(user)
                    conn.close()
                    if (err) 
                        callback(false)
                    else    
                        callback(true,user)
                  });
            });
        })
   }
}

module.exports = new User()