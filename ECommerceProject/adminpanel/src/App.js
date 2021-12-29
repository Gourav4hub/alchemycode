import React from 'react'
import Menu from './menuComponent/Menu'
import {Routes ,Route} from 'react-router-dom'
import Category from './categoryComponent/Category'
import Product from './productComponent/Product'
export default class App extends React.Component
{
  render()
  {
    return <>
      
      <Menu/>

    <div class="container-fluid">
        <main class="tm-main">

        <Routes>
          <Route path="/" element={<Category/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
          

        
        </main>
    </div>
    </>
  }
}