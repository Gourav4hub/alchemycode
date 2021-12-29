import React from 'react'
import Menu from './menuComponent/Menu'
import {Routes ,Route} from 'react-router-dom'
import Category from './categoryComponent/Category'
import Product from './productComponent/Product'

import categoryService from './services/CategoryService'
import {ACTION_LOAD_CATEGORIES} from './appredux/actions/CategoryAction'
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
        </Routes>
          

        
        </main>
    </div>
    </>
  }
}