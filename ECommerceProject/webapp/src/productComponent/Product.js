import React from 'react'
import packageJson from '../../package.json';
import { connect } from 'react-redux'
var mapStateToProps = state => {
   return { categories : state.masterdata.categories , 
            brands : state.masterdata.brands,
            products : state.masterdata.products
          }
}

class Product extends React.Component
{
  render(){
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
               {this.props.products.map((prod,index)=>{
                  return  <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="product-box">
                       <i><img 
                       src={`${packageJson.server}`+prod.prod_image}/></i>
                        <h3>{prod.prod_name}</h3>
                        <span>Rs. {prod.prod_price}</span>
                     </div>
                  </div>
               })}
              
               </div>
            </div>
         </div>
         </div>
    </>
  }
}

export default connect(mapStateToProps)(Product)