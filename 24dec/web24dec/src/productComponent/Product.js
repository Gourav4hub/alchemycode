import { useState } from 'react'
import './Product.css'
import DummyData from '../ProductData'

function Product(props) 
{
    const [products, setProducts] = useState(DummyData)
    const [priceRange,setPriceRange] = useState(0)
   
    const [companies,setCompanies] = useState([...new Set(DummyData.map(ob=>ob.company))])

    var arr = DummyData.map(ob=>ob.price)
    const [priceMinMax,setPriceMinMax] = useState({
        min : Math.min(...arr),
        max : Math.max(...arr)
    })

    const fetchCategory = (event)=>
    {
        var category = event.target.innerHTML.toLowerCase()
        var filterData = DummyData.filter(prod=>category=='all'?true:prod.category==category)
        setProducts(filterData)
        setCompanies([...new Set(filterData.map(ob=>ob.company))])
        var prices = filterData.map(ob=>ob.price)
        setPriceMinMax({
            min : Math.min(...prices),
            max : Math.max(...prices)
        })
    }

    // const addCart = (event)=>
    // {
    //     var pid = event.target.getAttribute('data-id');     
    //     props.addProductToCart(pid)   
    // }

    return <div className='Product'>

        <div className='row'>
            <div className='col-lg-3 text-center filterdiv'> 
                <h2>All Category</h2>               
                <hr/>
                    <h5 onClick={fetchCategory}>All</h5> <br/>
                    <h5 onClick={fetchCategory}>TV</h5> <br/>
                    <h5 onClick={fetchCategory}>AC</h5><br/>
                    <h5 onClick={fetchCategory}>Fan</h5>    <br/>   
                
                <h2>Company</h2>  
                {companies.map(com=>{
                    return <h5>{com}</h5>
                })}             
                <hr/>    

                <h2>Price : <span style={{color:'red'}}>{priceRange}</span></h2>  
                <h4>Min: {priceMinMax.min} &nbsp; Max : {priceMinMax.max}</h4>             
                <hr/> 
                <input type="range"  
                onChange={(event)=>setPriceRange(event.target.value)} value={priceRange} 
                min={priceMinMax.min} max={priceMinMax.max}/>   
            </div>
            <div className='col-lg-9'>
                <table className='table table-hovered'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((prod, index) => {
                            return <tr>
                                <td>{index + 1}</td>
                                <td><img src={prod.image} /></td>
                                <td>{prod.name}</td>
                                <td>{prod.company}</td>
                                <td>{prod.price}</td>
                                <td>{prod.discount}</td>
                                <th>
                                    {/* <button onClick={addCart} 
                                    data-id={prod.pid}
                                    className='btn btn-success'>Add Cart</button> */}

            <button onClick={()=>props.addProductToCart(prod.pid,true)}  className='btn btn-success'>Add Cart</button>
                                </th>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>


    </div>
}
export default Product