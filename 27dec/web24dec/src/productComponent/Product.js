import { useState } from 'react'
import './Product.css'
import DummyData from '../ProductData'
import Store from '../Store'
import { ACTION_ADD_CART } from '../actions/CartAction'

import { connect } from 'react-redux'
var mapStateToProps = state => {
    return { carts : state.carts }
}

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

    var addCart = (prod)=>
    {
        var cartItem = props.carts.find(ct=>ct.pid==prod.pid)
        if(cartItem==undefined) // Action_ADD_Cart
            Store.dispatch({...ACTION_ADD_CART,payload:{
                product : prod
            }})
    }

    return <div className='Product'>

        <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-2 filterdiv'> 
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
                <input type="range" className='form-control' 
                onChange={(event)=>setPriceRange(event.target.value)} value={priceRange} 
                min={priceMinMax.min} max={priceMinMax.max}/>   
            </div>
            <div className='col-lg-8'>
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

                         {props.carts.find(ob=>ob.pid==prod.pid)==undefined?   
                <button onClick={()=>addCart(prod)} 
             className='btn-lg btn-success'>Add Cart</button>:<b>Already Added</b>}

                                </th>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className='col-lg-1'></div>
        </div>
    </div>
}
export default connect(mapStateToProps)(Product)