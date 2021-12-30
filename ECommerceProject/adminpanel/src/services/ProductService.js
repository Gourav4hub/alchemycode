class ProductService
{
    saveProduct = (data)=>{
        return fetch("http://localhost:8989/api/product/save",{
            method : "POST",
            body : data
        })
    }

    getProducts = ()=>{
        return fetch("http://localhost:8989/api/product/list")
    }

    changeStatus = (status,pid)=>{
        return fetch("http://localhost:8989/api/product/changestatus",{
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