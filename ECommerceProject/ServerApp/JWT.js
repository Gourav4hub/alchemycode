const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
// get config vars
dotenv.config();

class JWT 
{
    generateAccessToken(userid) {
        return jwt.sign({user:userid}, process.env.TOKEN_SECRET, 
            { expiresIn: '5m' });
    }

    authenticateToken(req,callback) 
    {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
    
        if (token == null)
            callback({status:false,code:401})
        else
        {
            jwt.verify(token, process.env.TOKEN_SECRET, (err,tokendata)=>
            {
                //console.log(err)    
                if (err)
                    callback({status:false,code:403})
                else
                {                    
                    req.user = tokendata.user
                    callback({status:true,code:200})
                }
            })
        }
    }
}

module.exports = new JWT()