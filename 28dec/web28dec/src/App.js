import React from 'react'

export default class App extends React.Component
{
  constructor(){
    super()
    this.state = {
      patients : []
    }
  }

  getData = ()=>
  {
    // GET URL
    fetch("https://todearhemant.pythonanywhere.com/patient/api/patients/")
    .then(response=>response.json())
    .then(data=>{
        //console.log(data)
        this.setState({patients:data})
    })
    .catch(err=>{
      alert("Something Wrong !")
    })
  }

  saveData = (event)=>
  {
    var ob = {
      name : this.namebox.value,
      age : this.agebox.value,
      gender : this.genderbox.value
    }
    fetch("https://todearhemant.pythonanywhere.com/patient/api/patients/",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(ob)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data)        
    })
    .catch(err=>{
      alert("Something Wrong !")
    })
    event.preventDefault()
  }

  render()
  {
    return <div>
        <h1>Patient Records</h1>

        <form onSubmit={this.saveData}>
          <input type="text" ref={c=>this.namebox=c} placeholder='Patient Name' required/>&nbsp;
          <input type="number" ref={c=>this.agebox=c} placeholder='Patient Age' required/>&nbsp;
          <select ref={c=>this.genderbox=c} required>
            <option value=''>Choose Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <br/><br/>
          <button type='submit'>Add Data</button>
          &nbsp;
          <button onClick={this.getData}>Get Data</button>
        </form>
        
        
        <hr/>
        <table border='1' align='center' cellPadding='10' cellSpacing='5'>
          <tr>
            <th>Patient Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {this.state.patients.map((ob,index)=>{
            return <tr key={index}>
              <td>{ob.id}</td>
              <td>{ob.name}</td>
              <td>{ob.age}</td>
              <td>{ob.gender}</td>
            </tr>
          })}
        </table>
    </div>
  }
}