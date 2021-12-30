import packageJson from '../../package.json';
class CategoryService
{
    getCategories = ()=>{
        return fetch(`${packageJson.server}/api/category/list`)
    }

    saveCategory = (data)=>{
        return fetch(`${packageJson.server}/api/category/save`,{
            method : "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
    }
}
var obj = new CategoryService()
export default obj;