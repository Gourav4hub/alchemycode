import React from 'react'
import { connect } from 'react-redux'
var mapStateToProps = state => {
    return { brands : state.brands}
}

class Brand extends React.Component
{
    constructor(){
        super()
    }

    render() 
    {
    return <>
        <h1>Brand Page</h1>
        <hr className="col-12"/>      

        <div className='row'>
            <div className='col-lg-5'>
                <input type="text" className="form-control" placeholder="Brand Name" required/>
            </div>
            <div className='col-lg-3'>
                <button className="btn btn-success">Save Brand</button>
            </div>
            <div className='col-lg-4'>
                <b className="text-danger"></b>
            </div>
        </div>
        <hr className="col-12"/>  

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Brand Name</th>
                </tr>
            </thead>
            <tbody>
                {this.props.brands.map((ob,index)=>{
                    return <tr key={index}>
                           <th>{index+1}</th> 
                           <th>{ob.name}</th>
                    </tr>
                })}
            </tbody>
        </table>
    </>
    }
}

export default connect(mapStateToProps)(Brand)