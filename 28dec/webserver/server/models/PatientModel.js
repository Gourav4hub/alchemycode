const mongooseConnection = require('./DB')
var mongoose = require('mongoose');

class Patient
{
    patientSchema = mongoose.Schema({
        name: String,
        age: Number,
        gender: String
      });

    deletePatient = (id,callback)=>
    {
        var model = mongoose.model("patient",this.patientSchema,"patient");
        mongooseConnection(conn=>{
            conn.once('open', function() 
            {
                 model.deleteOne({_id:id}).exec(err=>{
                     conn.close()
                     if(err)
                        callback(false)
                     else
                        callback(true)   
                 })   
            })
        }) 
    } 
          

    savePatient = (data,callback)=>
    {
        var model = mongoose.model("patient",this.patientSchema,"patient");
        mongooseConnection(conn=>{
            conn.once('open', function() 
            {
                var ob = new model(data)
                ob.save(function (err,patient) {
                    console.log(patient)
                    conn.close()
                    if (err) 
                        callback(false)
                    else    
                        callback(true,patient)
                  });
            });
        })
    }

    fetchPatients = (callback)=>
    {
        var model = mongoose.model("patient",this.patientSchema,"patient");
        mongooseConnection(conn=>{
            conn.once('open', function() 
            {
                var obj = model.find({})
                obj.exec((err,data)=>{
                    conn.close()
                    if(err)
                        callback([])
                    else
                        callback(data) 
                });
             })
        })
    }
}

module.exports = new Patient()