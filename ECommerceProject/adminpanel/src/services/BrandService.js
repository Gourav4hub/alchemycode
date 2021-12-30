import packageJson from '../../package.json';
class BrandService
{
    getBrands = ()=>{
        return fetch(`${packageJson.server}/api/brand/list`)
    }
}
var obj = new BrandService()
export default obj;