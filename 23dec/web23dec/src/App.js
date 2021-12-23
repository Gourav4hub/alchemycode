import React from 'react'
import About from './About';
import Contact from './Contact';
import Home from './Home';

import {Link , BrowserRouter , Routes , Route} from 'react-router-dom'

class App extends React.Component
{
    constructor()
    {
      super()   
    }
    render()
    {     
      return <div>
         <h1>App Component</h1>
        
        <BrowserRouter>

            <Link to="/"> <b>Home</b>  </Link> &nbsp;
            <Link to="/about"> <b>About</b>  </Link>  &nbsp;
            <Link to="/contact"> <b>Contact</b> </Link>  &nbsp;
            <hr/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            
         </BrowserRouter>
      </div>
    }
}

export default App;
