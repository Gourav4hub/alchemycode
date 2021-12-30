import packageJson from '../../package.json';
class MasterService
{
    getBrands = ()=>{
        return fetch(`${packageJson.server}/api/brand/list`)
    }
    getCategories = ()=>{
        return fetch(`${packageJson.server}/api/category/list`)
    }
    getProducts = ()=>{
        return fetch(`${packageJson.server}/api/product/list`)
    }
}
var obj = new MasterService()
export default obj;