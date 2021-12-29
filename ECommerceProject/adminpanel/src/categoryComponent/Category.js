import React from 'react'
import categoryService from '../services/CategoryService'

class Category extends React.Component
{
    constructor(){
        super()
        this.state = {
            categories : []
        }
    }

    componentDidMount(){
        categoryService.getCategories()
        .then(response=>response.json())
        .then(data=>{
            this.setState({categories:data})
        })
    }

    render() 
    {
    return <>
        <h1>Category Page</h1>
        <hr className="col-12"/>      

        <div className='row'>
            <div className='col-lg-5'>
                <input type="text" className="form-control" placeholder="Category Name" required/>
            </div>
            <div className='col-lg-3'>
                <button className="btn btn-success">Save Category</button>
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
                    <th>Category Name</th>
                </tr>
            </thead>
            <tbody>
                {this.state.categories.map((ob,index)=>{
                    return <tr key={index}>
                           <th>{index+1}</th> 
                           <th>{ob.cate_name}</th>
                    </tr>
                })}
            </tbody>
        </table>
    </>
    }
}

export default Category