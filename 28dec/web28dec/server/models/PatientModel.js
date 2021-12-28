const mongooseConnection = require('./DB')

class Patient
{
    savePatient = ()=>{
        mongooseConnection(response=>{
            console.log(response)
        })
    }
}

module.exports = new Patient()