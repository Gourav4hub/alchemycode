class CategoryService
{
    getCategories = ()=>{
        return fetch("http://localhost:8989/api/category/list")
    }

    saveCategory = (data)=>{
        return fetch("http://localhost:8989/api/category/save",{
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