import React from 'react'
import Menu from './menuComponent/Menu'
import Product from './productComponent/Product'

class App extends React.Component
{
  render(){
    return <>
        <Menu/>
        <Product/>
    </>
  }
}

export default App