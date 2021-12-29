import React from 'react'
import { connect } from 'react-redux'
import categoryService from '../services/CategoryService'
import Store from '../appredux/store'
import {ACTION_ADD_CATEGORY} from '../appredux/actions/CategoryAction'
var mapStateToProps = state => {
    return { categories : state.categories}
}

class Category extends React.Component
{
    constructor(){
        super()
    }

    save = (event)=>{
        var ob = {
            cate_name : this.namebox.value
        }
        categoryService.saveCategory(ob)
        .then(response=>response.json())
        .then(data=>{
            if(data.status){
                    Store.dispatch({...ACTION_ADD_CATEGORY,payload:{
                        category : data.category
                    }})
            }
        })
        this.namebox.value=''
        event.preventDefault()
    }

    render() 
    {
    return <>
        <h1>Category Page</h1>
        <hr className="col-12"/>      
        <form onSubmit={this.save}>
        <div className='row'>
            <div className='col-lg-5'>
                <input type="text" ref={c=>this.namebox=c} className="form-control" placeholder="Category Name" required/>
            </div>
            <div className='col-lg-3'>
                <button type='submit' className="btn btn-success">Save Category</button>
            </div>
            <div className='col-lg-4'>
                <b className="text-danger"></b>
            </div>
        </div>
        </form>
        <hr className="col-12"/>  

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Category Name</th>
                </tr>
            </thead>
            <tbody>
                {this.props.categories.map((ob,index)=>{
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

export default connect(mapStateToProps)(Category)