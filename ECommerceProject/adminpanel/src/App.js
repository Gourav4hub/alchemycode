import React from 'react'
import Menu from './menuComponent/Menu'
import {Routes ,Route} from 'react-router-dom'
import Category from './categoryComponent/Category'
import Product from './productComponent/Product'
import Brand from './brandComponent/Brand'
import categoryService from './services/CategoryService'
import brandService from './services/BrandService'
import {ACTION_LOAD_CATEGORIES} from './appredux/actions/CategoryAction'
import {ACTION_LOAD_BRANDS} from './appredux/actions/BrandAction'
import Store from './appredux/store'

export default class App extends React.Component
{

  componentDidMount()
  {
    categoryService.getCategories()
    .then(response=>response.json())
    .then(data=>{
        Store.dispatch({...ACTION_LOAD_CATEGORIES,payload:{
                    categories : data
                }})
    })

    brandService.getBrands()
    .then(response=>response.json())
    .then(data=>{
        Store.dispatch({...ACTION_LOAD_BRANDS,payload:{
                    brands : data
                }})
    })
  }

  render()
  {
    return <>
      
      <Menu/>

    <div class="container-fluid">
        <main class="tm-main">

        <Routes>
          <Route path="/" element={<Category/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/brand" element={<Brand/>}/>
        </Routes>
          

        
        </main>
    </div>
    </>
  }
}