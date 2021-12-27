import { useEffect, useState } from 'react'
import './Product.css'
import DummyData from '../ProductData'
import Store from '../Store'
import { ACTION_ADD_CART } from '../actions/CartAction'
import CartOption from '../cartComponent/CartOption'

import {ACTION_FILTER_CHANGE} from '../actions/FilterAction'

import { connect } from 'react-redux'
var mapStateToProps = state => {
    return { carts : state.carts , filter : state.filter}
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

    const filterProducts = ()=>
    {
        // priceRange
        console.log(props.filter)

        var filterData = DummyData.filter(prod=>{
            if(props.filter.category=='all' || props.filter.category==undefined)
                return true
            else    
                if(prod.category==props.filter.category)                    
                    if(props.filter.company==undefined)
                        return true
                    else
                        if(prod.company==props.filter.company)
                            return true
                        else
                            return false    
                else
                    return false                    
        })
        
        setProducts(filterData)
        setCompanies([...new Set(DummyData.map(ob=>ob.company))])
        var prices = DummyData.map(ob=>ob.price)
        setPriceMinMax({
            min : Math.min(...prices),
            max : Math.max(...prices)
        })
    }

    const fetchCategory = (event)=>
    {
        var category = event.target.innerHTML.toLowerCase()
        Store.dispatch({...ACTION_FILTER_CHANGE,payload:{
            filter : {
                ...props.filter,
                category : category,               
            }
        }})
    }
    const fetchCompany = (event)=>
    {
        var company = event.target.innerHTML
        Store.dispatch({...ACTION_FILTER_CHANGE,payload:{
            filter : {
                ...props.filter,
                company : company,               
            }
        }})
    }

    var addCart = (prod)=>
    {
        var cartItem = props.carts.find(ct=>ct.pid==prod.pid)
        if(cartItem==undefined) // Action_ADD_Cart
            Store.dispatch({...ACTION_ADD_CART,payload:{
                product : prod
            }})
    }

    var setupCartOptions = (prod)=>
    {
        var ob = props.carts.find(ob=>ob.pid==prod.pid);
        if(ob==undefined)
            return <button className='btn-lg btn-success' 
            onClick={()=>addCart(prod)}>Add Cart</button>
        else    
            return <CartOption qty={ob.qty} cartid={ob.cartid}/>
    }

    useEffect(()=>{
        filterProducts()
    },[props.filter])

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
                {companies.map((com,index)=>{
                    return <h5 key={index} onClick={fetchCompany}>{com}</h5>
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
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td><img src={prod.image} /></td>
                                <td>{prod.name}</td>
                                <td>{prod.company}</td>
                                <td>{prod.price}</td>
                                <td>{prod.discount}</td>
                                <th>
                                    {setupCartOptions(prod)}
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