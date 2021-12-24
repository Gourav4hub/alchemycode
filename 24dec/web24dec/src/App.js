// useState()
import {useState} from 'react'
function App()
{
  var namebox = undefined;
  var agebox = undefined;
  var salarybox = undefined;

  const [title,setTitle] = useState("Good Morning")
  const [num,setNum] = useState(100)
  const [employees,setEmployees] = useState([
                          {name:'Vikas',age:34,salary:12000},
                          {name:'Gopal',age:36,salary:22000},
                      ])

  const addEmp = ()=>
  {
      var ob  = {
        name : namebox.value,
        age : agebox.value,
        salary : salarybox.value
      }
      setEmployees([...employees,ob])
  }                      
  return <div>
    <h1>App Component</h1>
    <b>{title} , {num}</b> &nbsp; 
    <button onClick={()=>setTitle('Good Evening !')}>Change Title</button>
    <button onClick={()=>setNum(500)}>Change Num</button>
    <Demo title={title}/>
    <hr/>
    <input type="text" ref={c=>namebox=c} placeholder='Name'/>&nbsp;
    <input type="number" ref={c=>agebox=c} placeholder='Age'/>&nbsp;
    <input type="number" ref={c=>salarybox=c} placeholder='Salary'/>&nbsp;
    <br/><br/>
    <button onClick={addEmp}>Add Employee</button> <br/>
    {employees.map(emp=>{
      return <h5> {emp.name} , {emp.age} , {emp.salary} </h5> 
    })}

  </div>
}

function Demo(props)
{
  return <div>
    <h2>Demo Component</h2>
    <b>{props.title}</b>
  </div>
}

export default App