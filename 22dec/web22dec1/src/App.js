import React from 'react'

class App extends React.Component
{
    constructor()
    {
      super()      
      this.state = {
        employees : [
          {empid:101 , name : 'vikas' , age : 34 , 
          email : "vikas@gmail.com", salary : 45000 , bonus : 500},
          {empid:102 , name : 'meena' , age : 31 , 
          email : "meena@gmail.com", salary : 41000 , bonus : 450},
        ],
        duplicateIdStatus : false
      }
    }

    addEmp = ()=>{
       var ob = { empid : this.idbox.value*1 , 
                  name : this.namebox.value , 
                  age : this.agebox.value*1 , 
                  email : this.emailbox.value,
                  salary : this.salbox.value*1 , 
                  bonus : this.bonusbox.value*1 }
      //console.log(ob)                  
      this.setState({employees : [...this.state.employees,ob]})
    }

    checkEmpId = ()=>{
        var empid = this.idbox.value*1;
        var status = this.state.employees.find((emp)=>emp.empid==empid)!=undefined;        
        this.setState({duplicateIdStatus:status})
    }

    render()
    {     
      return <div>
          <h1>Employee Records</h1>   

          <input type='text' ref={c=>this.idbox=c} 
          onBlur={this.checkEmpId}
          onFocus={()=>this.setState({duplicateIdStatus:false})}
          placeholder='Employee ID'/>&nbsp;

          <input type='text' ref={c=>this.namebox=c} placeholder='Employee Name'/>&nbsp;
          <input type='number' ref={c=>this.agebox=c} placeholder='Employee Age'/>&nbsp;
          <input type='email' ref={c=>this.emailbox=c} placeholder='Employee Email'/>&nbsp;
          <input type='number' ref={c=>this.salbox=c} placeholder='Employee Salary'/>&nbsp;
          <input type='number' ref={c=>this.bonusbox=c} placeholder='Employee Bonus'/>&nbsp;
          <br/><br/>

          {this.state.duplicateIdStatus?<b style={{color:"red"}}>"Employee is Already Exist"</b>:<button onClick={this.addEmp}>Add Employee</button>}
          

          <hr/>

          <table border='1' align='center' cellPadding="10" cellSpacing="5">
            <thead>
            <tr>
              <th>S.No.</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Bonus</th>
              <th>Total Salary</th>
            </tr>
            </thead>
            <tbody>
            {this.state.employees.map((emp,index)=>
            {
              return <tr>
                <td>{index+1}</td>
                <td>{emp.empid}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.email}</td>
                <td>{emp.salary}</td>
                <td>{emp.bonus}</td>
                <td>{emp.salary+emp.bonus}</td>
              </tr>
            })}
            </tbody>
          </table>
      </div>
    }
}

export default App;
