import packageJson from '../../package.json';
class UserService
{
    saveUser = (data)=>{
        return fetch(`${packageJson.server}/user/register`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
    }

    loginUser = (data)=>{
        return fetch(`${packageJson.server}/user/login`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
    }

    getUser = (token)=>{
        return fetch(`${packageJson.server}/user/getUser`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json",
                "Authorization" : 'Bearer '.concat(token)
            }
        })
    }

    updateProfile = (data,token)=>{
        return fetch(`${packageJson.server}/user/updateProfile`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json",
                "Authorization" : 'Bearer '.concat(token)
            },
            body: JSON.stringify(data)
        })
    }
}
var obj = new UserService()
export default obj;