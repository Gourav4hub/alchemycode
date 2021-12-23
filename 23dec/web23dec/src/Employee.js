import React from 'react'

export default class Employee extends React.Component
{
    render()
    {
        return <tr>
        <td>{this.props.index+1}</td>
        <td>{this.props.emp.empid}</td>
        <td>{this.props.emp.name}</td>
        <td>{this.props.emp.age}</td>
        <td>{this.props.emp.email}</td>
        <td>{this.props.emp.salary}</td>
        <td>{this.props.emp.bonus}</td>
        <td>{this.props.emp.salary+this.props.emp.bonus}</td>
        <td>
            <button onClick={()=>this.props.deleteEmployee(this.props.emp.empid)}>Delete</button>         
            &nbsp;
            <button onClick={()=>this.props.editEmployee(this.props.emp.empid)}>Update</button>
        </td>
      </tr>
    }
}