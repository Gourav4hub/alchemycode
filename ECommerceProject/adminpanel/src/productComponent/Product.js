import React from 'react'
import { connect } from 'react-redux'
import Store from '../appredux/store'
import packageJson from '../../package.json';
import {ACTION_ADD_PRODUCT,ACTION_CHANGE_PRODUCT_STATUS} from '../appredux/actions/ProductAction'

import productService from '../services/ProductService'

var mapStateToProps = state => {
    return { categories : state.categories , 
             brands : state.brands,
             products : state.products.sort((a,b)=>(a.prod_status > b.prod_status) ? 1 : ((b.prod_status > a.prod_status) ? -1 : 0))  
           }
}

class Product extends React.Component
{
    save = (event)=>{
        var formData = new FormData()
        formData.append('prod_image',this.filebox.files[0])
        formData.append('prod_name',this.namebox.value)
        formData.append('prod_price',this.pricebox.value)
        formData.append('prod_cate',this.catebox.value)
        formData.append('prod_brand',this.brandbox.value)
        
        productService.saveProduct(formData)
        .then(response=>response.json())
        .then(data=>{
            if(data.status){
                Store.dispatch({...ACTION_ADD_PRODUCT,payload:{
                    product :  data.product
                }})
            }
        })
        event.preventDefault()
    }

    changeStatus = (status,pid)=>{
        console.log(status,pid)
        productService.changeStatus(status,pid)
        .then(response=>response.json())
        .then(data=>{
            if(data.status){
               Store.dispatch({...ACTION_CHANGE_PRODUCT_STATUS,payload:{
                   pid,status
               }})
            }
        })
    }

    render() 
    {        
        return <>
        <h1>Product Page</h1>
        <hr className="col-12"/>  
        <form onSubmit={this.save}>
        <div className='row'>
           <div className='col-lg-6'>
                <input type="text" ref={c=>this.namebox=c} className="form-control" 
                placeholder="Product Name" required/>
           </div>
           <div className='col-lg-6'>
                <input type="number" ref={c=>this.pricebox=c} className="form-control" 
                placeholder="Product Price" required/>
           </div>
        </div>
        <br/>
        <div className='row'>
           <div className='col-lg-6'>
                <select ref={c=>this.catebox=c} className="form-control" 
                required>
                    <option value=''>Choose Category</option>
                    {this.props.categories.map((ob,index)=>{
                    return <option key={index} value={ob._id}>                           
                                {ob.cate_name}
                            </option>
                })}
                </select>
           </div>
           <div className='col-lg-6'>
                <select ref={c=>this.brandbox=c} className="form-control" 
                required>
                    <option value=''>Choose Brand</option>
                    {this.props.brands.map((ob,index)=>{
                    return <option key={index} value={ob.id}>                           
                                {ob.name}
                            </option>
                })}
                </select>
           </div>
        </div>
        <br/>
        <div className='row'>
           <div className='col-lg-6'>
               <input type="file" ref={c=>this.filebox=c} 
               className="form-control" required/>
           </div>
           <div className='col-lg-6'>
               <button type='submit' className='btn btn-success'>Save Product</button>
           </div>
        </div>
        </form>   
        <hr className="col-12"/>     
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Image</th>
                    <th>Product Name</th>                    
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {this.props.products.map((prod,index)=>
                {
                    return <tr key={index}>
                    <th>{index+1}</th>
                    <th>
                        <img src={`${packageJson.server}`+prod.prod_image} height="200" width="200"/>
                    </th>
                    <th>{prod.prod_name}</th>                    
                    <th>Category</th>
                    <th>{prod.prod_brand}</th>
                    <th>{prod.prod_price}</th>
                    <th>
                        {prod.prod_status?<button className='btn btn-warning' onClick={()=>this.changeStatus(!prod.prod_status,prod._id)}>DeActivate</button>:<button className='btn btn-info' onClick={()=>this.changeStatus(!prod.prod_status,prod._id)}>Activate</button>}
                    </th>
                    </tr>
                })}
            </tbody>
        </table>
    </>
    }
}

export default connect(mapStateToProps)(Product)