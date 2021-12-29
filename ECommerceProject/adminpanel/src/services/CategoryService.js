class CategoryService
{
    getCategories = ()=>{
        return fetch("http://localhost:8989/api/category/list")
    }

    saveCategory = ()=>{
        
    }
}
var obj = new CategoryService()
export default obj;