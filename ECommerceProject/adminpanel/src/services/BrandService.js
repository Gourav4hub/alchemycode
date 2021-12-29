class BrandService
{
    getBrands = ()=>{
        return fetch("http://localhost:8989/api/brand/list")
    }
}
var obj = new BrandService()
export default obj;