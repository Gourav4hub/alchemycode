import {useState} from 'react'
import './App.css'
import Product from './productComponent/Product'

function App()
{          
  return <div className='App'>
    <h1>My Shopping Cart</h1>
    <hr/>

    <Product/>
  </div>
}
export default App