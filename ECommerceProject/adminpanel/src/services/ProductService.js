import packageJson from '../../package.json';
class ProductService
{
    saveProduct = (data)=>{
        return fetch(`${packageJson.server}/api/product/save`,{
            method : "POST",
            body : data
        })
    }

    getProducts = ()=>{
        return fetch(`${packageJson.server}/api/product/list`)
    }

    changeStatus = (status,pid)=>{
        return fetch(`${packageJson.server}/api/product/changestatus`,{
            method : "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({pid,status})
        })
    }
}
var obj = new ProductService()
export default obj;