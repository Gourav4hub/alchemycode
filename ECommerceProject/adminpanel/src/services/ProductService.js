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
}
var obj = new ProductService()
export default obj;