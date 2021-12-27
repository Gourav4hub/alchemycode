import {useState} from 'react'
import './App.css'
import Login from './loginComponent/Login'
import Menu from './menuComponent/Menu'
import Product from './productComponent/Product'
import DummyData from './ProductData'
import {Routes,Route} from 'react-router-dom'
function App()
{        
  const [carts,setCart]  = useState([])
  const [isCartVisible,setIsCartVisible] = useState(false)

  const addProductToCart = (pid,isIncrement)=>
  {   
      var product = DummyData.find(ob=>ob.pid==pid)
      if(product!=undefined)
      {       
        var cartItem = carts.find(ct=>ct.pid==pid)
        if(cartItem==undefined)
            setCart([...carts,{ ...product , qty:1}])
        else
        {       
            if(cartItem.qty==1 && !isIncrement)            
              deleteCart(pid)
            else
              setCart(carts.map(ct=>ct==cartItem?{...ct,qty:isIncrement?ct.qty+1:ct.qty-1}:ct))             
        }
      }      
  }

  const deleteCart = (pid)=>{
    setCart(carts.filter(ct=>ct.pid!=pid))
  }

  return <div className='App'>
    <h1>My Shopping Cart</h1>

    <div className='row'>
      <div className='col-lg-6'>
        <Menu/>
      </div>
      <div className='col-lg-6'>
        <h4 style={{color:'red',textAlign:'right'}}>
            <span onClick={()=>setIsCartVisible(true)}> Cart : {carts.reduce((x,ob)=>ob.qty+x,0)} &nbsp;&nbsp;&nbsp; </span>
        </h4>  
      </div>
    </div>
    

    <div style={{display:isCartVisible?"block":"none"}}>
      <h3>Cart Details</h3>
      <table className='table table-striped'>
        <thead>
          <tr>
                            <th>S.No.</th>
                            <th>Image</th>
                            <th>Product Name</th>                           
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((prod, index)=>
          {
            return <tr>
                                <td>{index + 1}</td>
                                <td><img src={prod.image} /></td>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td>{prod.discount}</td>
                                <td>{prod.qty}</td>
                                <td>{(prod.price*prod.qty)-(prod.discount*prod.qty)}</td>
                                <th>
                                  <button onClick={()=>deleteCart(prod.pid)} className='btn btn-danger'>Delete</button>
                                  <br/><br/>
                                  <button onClick={()=>addProductToCart(prod.pid,false)} className='btn btn-info'>-</button>
                                  &nbsp;
                                  <button onClick={()=>addProductToCart(prod.pid,true)} className='btn btn-info'>+</button>
                                </th>
                    </tr>
          })}
        </tbody>
      </table>
      <button className='btn btn-primary'  onClick={()=>setIsCartVisible(false)}>Close</button>
    </div>

    <hr/>

    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/products" element={<Product addProductToCart={addProductToCart}/>}/>
    </Routes>
  </div>
}
export default App