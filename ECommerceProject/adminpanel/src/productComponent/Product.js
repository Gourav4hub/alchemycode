import React from 'react'
import { connect } from 'react-redux'
import Store from '../appredux/store'

var mapStateToProps = state => {
    return { categories : state.categories , brands : state.brands}
}

class Product extends React.Component
{
    render() {
    return <>
        <h1>Product Page</h1>
        <hr className="col-12"/>  
        <form>
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
                    return <option key={index} value={ob.name}>                           
                                {ob.name}
                            </option>
                })}
                </select>
           </div>
        </div>
        <br/>
        <div className='row'>
           <div className='col-lg-6'>
               <input type="file" className="form-control" 
                required/>
           </div>
           <div className='col-lg-6'>
               <button className='btn btn-success'>Save Product</button>
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
                </tr>
            </thead>
        </table>
    </>
    }
}

export default connect(mapStateToProps)(Product)