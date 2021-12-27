import {useState} from 'react'
import './App.css'
import Login from './loginComponent/Login'
import Menu from './menuComponent/Menu'
import Product from './productComponent/Product'
import DummyData from './ProductData'
import {Routes,Route, Link} from 'react-router-dom'
//import Store from './Store'
import { connect } from 'react-redux'
import Cart from './cartComponent/Cart'

var mapStateToProps = state => {
    return { carts : state.carts }
}


function App(props)
{  
  // const addProductToCart = (pid,isIncrement)=>
  // {   
  //     var product = DummyData.find(ob=>ob.pid==pid)
  //     if(product!=undefined)
  //     {       
  //       var cartItem = carts.find(ct=>ct.pid==pid)
  //       if(cartItem==undefined)
  //           setCart([...carts,{ ...product , qty:1}])
  //       else
  //       {       
  //           if(cartItem.qty==1 && !isIncrement)            
  //             deleteCart(pid)
  //           else
  //             setCart(carts.map(ct=>ct==cartItem?{...ct,qty:isIncrement?ct.qty+1:ct.qty-1}:ct))             
  //       }
  //     }      
  // }

  // const deleteCart = (pid)=>{
  //   setCart(carts.filter(ct=>ct.pid!=pid))
  // }

  return <div className='App'>
    <h1>My Shopping Cart</h1>

    <div className='row'>
      <div className='col-lg-6'>
        <Menu/>
      </div>
      <div className='col-lg-6'>
        <h4 style={{color:'red',textAlign:'right'}}>
            <Link to="/mycart"><span>Cart : {props.carts.reduce((x,ob)=>ob.qty+x,0)} &nbsp;&nbsp;</span></Link>
        </h4>  
      </div>
    </div>
    

   

    <hr/>

    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/mycart" element={<Cart/>}/>
    </Routes>
  </div>
}
export default connect(mapStateToProps)(App)