import React from 'react'
import Employee from './Employee'

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
        duplicateStatus : false,
        duplicateMessage : "",
        editstatus : false
      }
    }

    updateEmp = ()=>{
      var ob = { empid : this.idbox.value*1 , 
        name : this.namebox.value , 
        age : this.agebox.value*1 , 
        email : this.emailbox.value,
        salary : this.salbox.value*1 , 
        bonus : this.bonusbox.value*1 }

      var arr = [...this.state.employees]  

      arr = arr.map((emp)=>emp.empid==ob.empid?ob:emp)
      this.setState({employees:arr})  
      this.setState({editstatus:false})
      this.clearBoxes()
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
      this.clearBoxes()
    }

    checkUniqueValue = (event)=>
    {
      if(!this.state.editstatus)
      {
        var data = event.target.value
        var id = event.target.id
        //console.log(data,id)
        var status = this.state.employees.find((emp)=>emp[id]==data)!=undefined;        

        var msg = `Duplicate Value found in ${id} !`
        this.setState({duplicateStatus:status,duplicateMessage:msg})
      }
    }

    deleteEmp = (id)=>{
       var newdata = this.state.employees.filter(emp=>emp.empid!=id);
       this.setState({employees : newdata})
    }

    editEmp = (id)=>
    {
      var obj = this.state.employees.find((emp)=>emp.empid==id)
      this.idbox.value = obj.empid
      this.namebox.value = obj.name
      this.agebox.value = obj.age
      this.salbox.value = obj.salary
      this.emailbox.value = obj.email
      this.bonusbox.value = obj.bonus
      this.setState({editstatus:true})
    }

    clearBoxes = ()=>{
      this.idbox.value = ''
      this.namebox.value = ''
      this.agebox.value = ''
      this.salbox.value = ''
      this.emailbox.value = ''
      this.bonusbox.value = ''
    }

    render()
    {     
      return <div>
          <h1>Employee Records</h1>   

          <input type='text' id="empid" ref={c=>this.idbox=c} 
          onBlur={this.checkUniqueValue}
          onFocus={()=>this.setState({duplicateStatus:false,duplicateMessage:''})}
          placeholder='Employee ID' readOnly={this.state.editstatus} />&nbsp;

          <input type='text' ref={c=>this.namebox=c} placeholder='Employee Name'/>&nbsp;
          <input type='number' ref={c=>this.agebox=c} placeholder='Employee Age'/>&nbsp;

          <input type='email' id="email" ref={c=>this.emailbox=c} 
          onBlur={this.checkUniqueValue}
          onFocus={()=>this.setState({duplicateStatus:false,duplicateMessage:''})}
          placeholder='Employee Email' readOnly={this.state.editstatus}/>&nbsp;

          <input type='number' ref={c=>this.salbox=c} placeholder='Employee Salary'/>&nbsp;
          <input type='number' ref={c=>this.bonusbox=c} placeholder='Employee Bonus'/>&nbsp;
          <br/><br/>

          {this.state.editstatus?<button onClick={this.updateEmp}>Update Employee</button>:this.state.duplicateStatus?<b style={{color:"red"}}>{this.state.duplicateMessage}</b>:<button onClick={this.addEmp}>Add Employee</button>}
          

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
              <th>
                Operation
              </th>
            </tr>
            </thead>
            <tbody>
            {this.state.employees.map((emp,index)=>
            {
              return <Employee key={index} emp={emp} 
              deleteEmployee={this.deleteEmp} editEmployee={this.editEmp}
              index={index}/>
            })}
            </tbody>
          </table>
      </div>
    }
}

export default App;
