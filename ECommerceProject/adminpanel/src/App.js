import React from 'react'
import Menu from './menuComponent/Menu'

export default class App extends React.Component
{
  render()
  {
    return <>
      
      <Menu/>

    <div class="container-fluid">
        <main class="tm-main">

          

          <footer class="row tm-row">
                <hr class="col-12"/>                
                <div class="col-md-6 col-12 tm-color-gray tm-copyright">
                    Copyright 2021 ECommerce  Co. Ltd.
                </div>
            </footer>
        </main>
    </div>
    </>
  }
}