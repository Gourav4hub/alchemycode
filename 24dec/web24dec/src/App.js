import {useState} from 'react'
import './App.css'
import Product from './productComponent/Product'
import DummyData from './ProductData'
function App()
{        
  const [carts,setCart]  = useState([])

  const addProductToCart = (pid)=>
  {
    var product = DummyData.find(ob=>ob.pid==pid)
    if(product!=undefined)
    {       
       var cartItem = carts.find(ct=>ct.pid==pid)
       if(cartItem==undefined)
          setCart([...carts,{ ...product , qty:1}])
       else       
          setCart(carts.map(ct=>ct==cartItem?{...ct,qty:ct.qty+1}:ct))      
    }   
  }

  return <div className='App'>
    <h1>My Shopping Cart</h1>
    <h4 style={{color:'red',textAlign:'right'}}>
      <span onClick={()=>console.log(carts)}> Cart : {carts.length} &nbsp;&nbsp;&nbsp; </span>
    </h4>    
    <hr/>

    <Product addProductToCart={addProductToCart}/>
  </div>
}
export default App