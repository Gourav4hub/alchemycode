const mongooseConnection = require('./DB')
var mongoose = require('mongoose');

class Category
{
    categorySchema = mongoose.Schema({        
        cate_name: String       
    });
    

    saveCategory = (data,callback)=>
    {       
        var model = mongoose.model("category",this.categorySchema,"category");
        mongooseConnection(conn=>{
            conn.once('open', function() 
            {
                var ob = new model(data)
                ob.save(function (err,category) {
                    console.log(category)
                    conn.close()
                    if (err) 
                        callback(false)
                    else    
                        callback(true,category)
                  });
            });
        })
    }

    fetchCategory = (callback)=>
    {       
        var model = mongoose.model("category",this.categorySchema,"category");
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

module.exports = new Category()