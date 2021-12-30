import React from 'react'
import packageJson from '../../package.json';
import { connect } from 'react-redux'

import Store from '../appredux/store'
import * as actions from '../appredux/actions/FilterAction'

var mapStateToProps = state => {
   return {
      categories: state.masterdata.categories,
      brands: state.masterdata.brands,
      products: state.masterdata.products,

      filtercategory : state.filter.categories,
      filterbrand : state.filter.brands,
      filtercategoryCount : state.filter.categories.length,
      filterbrandCount : state.filter.brands.length
   }
}

class Product extends React.Component 
{
   constructor(){
      super()
      this.state = {
         filterData : []
      }
   }

   filterData = ()=>
   {      
      var arr = [];
      if(this.props.filtercategoryCount>0  && this.props.filterbrandCount>0)
      {
      arr = this.props.products.filter(ob=>this.props.filtercategory.indexOf(ob.prod_cate)!=-1).filter(ob=>this.props.filterbrand.indexOf(parseInt(ob.prod_brand))!=-1)      
      }else{
         if(this.props.filtercategoryCount>0  && this.props.filterbrandCount==0)
         {
            arr = this.props.products.filter(ob=>this.props.filtercategory.indexOf(ob.prod_cate)!=-1)
         }else{
            if(this.props.filtercategoryCount==0  && this.props.filterbrandCount>0)
            {              
               arr = this.props.products.filter(ob=>this.props.filterbrand.indexOf(parseInt(ob.prod_brand))!=-1)
            }else{
               arr = this.props.products
            }
         }
      }   
      return arr   
   }

  

   chooseCategory = (cid,status)=>
   {      
      console.log(cid,status)
      Store.dispatch({...actions.ACTION_FILTER_CATEGORY,payload:{
                           cid,status
                     }})
   }
   chooseBrand = (brandid,status)=>
   {      
      console.log(brandid,status)
      Store.dispatch({...actions.ACTION_FILTER_BRAND,payload:{
                        brandid,status
                     }})
   }
   render() {
      return <>
         <div className="brand_color">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2>Our Products</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="product-bg">
            <div className="product-bg-white">
               <div className="container">

                  <div className="row">
                     <div className='col-lg-2'>
                        <h2 className='bg-info'>Category ({this.props.filtercategoryCount})</h2>
                        {this.props.categories.map((cate, index) => 
                        {
                           return <div key={index}>
                              <input type='checkbox' 
                                 checked={this.props.filtercategory.indexOf(cate._id)!=-1}                                 
                                 onChange={(event)=>this.chooseCategory(cate._id,event.target.checked)}/>&nbsp;&nbsp;&nbsp;
                                 <b className='text-danger'>{cate.cate_name}</b>
                              </div>
                        })}
                        <hr/>
                        <h2 className='bg-info'>Brand ({this.props.filterbrandCount})</h2>
                        {this.props.brands.map((brand, index) => 
                        {
                           return <div key={index}>
                                 <input type='checkbox'
                                 checked={this.props.filterbrand.indexOf(brand.id)!=-1}                                 
                                 onChange={(event)=>this.chooseBrand(brand.id,event.target.checked)}
                                 />&nbsp;&nbsp;&nbsp;
                                 <b className='text-danger'>{brand.name}</b>
                              </div>
                        })}
                     </div>

                     <div className='col-lg-10'>
                        <div className="row">
                           {this.filterData().map((prod, index) => {
                              return <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                 <div className="product-box">
                                    <i><img
                                       src={`${packageJson.server}` + prod.prod_image} /></i>
                                    <h3>{prod.prod_name}</h3>
                                    <span>Rs. {prod.prod_price}</span>
                                 </div>
                              </div>
                           })}
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </>
   }
}

export default connect(mapStateToProps)(Product)