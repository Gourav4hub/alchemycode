var mongoose = require('mongoose');

function getConnection(callback)
{
    mongoose.connect('mongodb://localhost:27017/hospitaldb');
    var conn = mongoose.connection;
    callback(conn)
}

module.exports = getConnection