import React from 'react'
import {Navigate} from 'react-router-dom'

import userService from '../services/UserService'

import Store from '../appredux/store'
import {ACTION_USER_LOGOUT , ACTION_USER_UPDATE_TOKEN} from '../appredux/actions/UserAction'
import {connect} from 'react-redux'
var mapStateToProps = state => {
   return {
      user: state.user,
   }
}

class Profile extends React.Component
{
    constructor(){
        super()
        this.state = {
            updateProfilemsg : '',
            updatePasswordmsg : '',
            userinfo : {name:'',phone:'',email:''}
        }       
    }

    componentDidUpdate(){
        this.namebox.value = this.state.userinfo.name
        this.phonebox.value = this.state.userinfo.phone
    }

    componentDidMount()
    {
        console.log(this.props.user)
        userService.getUser(this.props.user.token).then(response=>response.json()).then(data=>{
            if(data.status)
            {
                Store.dispatch({...ACTION_USER_UPDATE_TOKEN,payload:{
                    token : data.token
                }})
                this.setState({userinfo:data.user})
            }else{
                if(data.code==401)
                    alert("Invalid User !")
                if(data.code==403)
                    alert("Session Lost !")  
                Store.dispatch({...ACTION_USER_LOGOUT})                      
            }
        });
    }

    updateProfile =(event)=>
    {
        var ob = {
            name : this.namebox.value,
            phone : this.phonebox.value
        }
        userService.updateProfile(ob,this.props.user.token).then(response=>response.json()).then(data=>{
            console.log(data)
        });
        event.preventDefault()
    }
    updatePassword =()=>{}

    render()
    {
        if(this.props.user.loginstatus==false){
            return <Navigate to="/"/>
        }
        return <>
            <div className="brand_color">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2>User Profile ({this.state.userinfo.email})</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <br />
            <div className='row'>
                <div className='col-lg-6'>
                    <h2>User Info</h2>
                    <form class="main_form" onSubmit={this.updateProfile}>
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <input ref={c=>this.namebox=c} class="form-control" placeholder="Your name" type="text" name="Your Name" required/>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <input ref={c=>this.phonebox=c} class="form-control" placeholder="Phone" type="text" name="Phone" required/>

                            </div>
                            <div class="col-md-6">
                                &nbsp;
                                <b className='text-danger'>{this.state.updateProfilemsg}</b>
                            </div>
                            <div class="col-md-6">
                                <button type='submit' class="send">Update</button>                               
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-lg-6'>
                <h2>Change Password</h2>
                    <form class="main_form" onSubmit={this.updatePassword}>
                        <div class="row">
                            <div class="col-lg-12">
                            <input ref={c=>this.oldpwdbox=c}class="form-control" placeholder="Old Password" type="password" required />
                            </div>
                            <div class="col-lg-12">
                                <input ref={c=>this.newpwdbox=c}class="form-control" placeholder="New Password" type="password" required />
                            </div>                          
                            <div class="col-md-6">
                                &nbsp;
                                <b className='text-danger'>{this.state.updatePasswordmsg}</b>
                            </div>
                            <div class="col-md-6">
                                <button type='submit' class="send">Change Password</button>                               
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    }
}

export default connect(mapStateToProps)(Profile)