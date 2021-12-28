var mongoose = require('mongoose');

function getConnection(callback)
{
    mongoose.connect('mongodb://localhost:27017/hospitaldb');
    var db = mongoose.connection;
 
    db.on('error', ()=>{
        callback({status:false})
    });
 
    db.once('open', function() 
    {
        callback({status:true,db:db})
    });
}

module.exports = getConnection