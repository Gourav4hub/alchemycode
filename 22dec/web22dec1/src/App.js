import React from 'react'
import Demo from './Demo';

class App extends React.Component
{
    constructor()
    {
      super()      
      this.state = {
          name : "Gourav Dodia"
      }
    }

    changeName = (name)=>{
      this.setState({name:name})
    }

    render()
    {     
      return <div>
          <h1>App Component</h1>   
          <b>{this.state.name}</b>

          <br/>
          <input type='text' placeholder='Name' 
          onChange={(event)=>this.setState({name:event.target.value})}
          value={this.state.name}/>

          <br/>
          <Demo data={this.state.name} fun={this.changeName}/>
      </div>
    }
}

export default App;
