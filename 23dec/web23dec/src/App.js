import React from 'react'
import About from './aboutComponent/About';
import Menu from './menuComponent/Menu';
import MyWork from './workComponent/MyWork';
import Contact from './contactComponent/Contact'
import {Routes,Route} from 'react-router-dom'
class App extends React.Component
{  
    render()
    {     
      return <div id="page-wraper">  

      <Menu/>

      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/work" element={<MyWork/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </div>

    }
}

export default App;
