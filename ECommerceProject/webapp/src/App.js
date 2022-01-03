import React from 'react'
import Menu from './menuComponent/Menu'
import Product from './productComponent/Product'
import Login from './loginComponent/Login'
import MasterService from './services/MasterService'

import {Routes,Route} from 'react-router-dom'

import * as actions from './appredux/actions/MasterAction'
import Store from './appredux/store'
import Profile from './profileComponent/Profile'
class App extends React.Component
{
  componentDidMount()
  {
    MasterService.getCategories()
    .then(response=>response.json())
    .then(data=>
      {
        //console.log(data)
        Store.dispatch({...actions.ACTION_LOAD_CATEGORIES,payload:{
                    categories : data
        }})

        MasterService.getBrands()
        .then(response=>response.json())
        .then(data=>{
            //console.log(data)
             Store.dispatch({...actions.ACTION_LOAD_BRANDS,payload:{
                        brands : data
                    }})
                    MasterService.getProducts()
                    .then(response=>response.json())
                    .then(data=>{
                        //console.log(data)
                        Store.dispatch({...actions.ACTION_LOAD_PRODUCTS,payload:{
                                    products : data
                                }})
                    })
        })
    }) 
  }
  render(){
    return <>
        <Menu/>
        <Routes>
          <Route path="/" element={<Product/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
     
        
    </>
  }
}

export default App