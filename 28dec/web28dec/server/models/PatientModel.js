const mongooseConnection = require('./DB')
var mongoose = require('mongoose');

class Patient
{
    patientSchema = mongoose.Schema({
        name: String,
        age: Number,
        gender: String
      });
    model = mongoose.model("patient",this.patientSchema,"patient");      

    savePatient = (data,callback)=>{
        mongooseConnection(response=>{
            //console.log(response)
            
            var ob = new this.model(data)
            ob.save(function (err,patient) {
                console.log(patient)
                if (err) 
                    callback(false)
                else    
                    callback(true,patient)
              });
        })
    }

    fetchPatients = (callback)=>{
        mongooseConnection(response=>{
            var obj = this.model.find({})
            obj.exec((err,data)=>{
                if(err)
                    callback([])
                else
                    callback(data)    
            })
        })
    }
}

module.exports = new Patient()