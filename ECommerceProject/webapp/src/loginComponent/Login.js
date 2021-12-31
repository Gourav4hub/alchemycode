import React from 'react'
import userService from '../services/UserService'

import Store from '../appredux/store'
import {ACTION_USER_LOGIN} from '../appredux/actions/UserAction'

import {Navigate} from 'react-router-dom'

class Login extends React.Component 
{
    constructor(){
        super()
        this.state = {
            regmsg : '',
            loginmsg : '',
            loginstatus : false
        }
    }

    login = (event)=>{
        var ob = {
            email : this.loginemailbox.value,
            password : this.loginpwdbox.value,
        }
        console.log(ob)
        userService.loginUser(ob).then(response=>response.json()).then(data=>{
            console.log(data)
            if(data.status){
                Store.dispatch({...ACTION_USER_LOGIN,payload:{
                    token : data.token,
                    username : data.username
                }})
                this.setState({loginstatus:true})
            }else
            this.setState({loginmsg:data.msg})
        });
        event.preventDefault()
    }

    register = (event)=>{
        var ob = {
            name : this.namebox.value,
            phone : this.phonebox.value,
            email : this.emailbox.value,
            password : this.pwdbox.value,
            address : [this.addressbox.value]
        }
        console.log(ob)
        this.setState({regmsg:"Process is running ..... "})
        userService.saveUser(ob).then(response=>response.json()).then(data=>{
            console.log(data)
            this.setState({regmsg:data.msg})
        });;
        event.preventDefault()
    }

    render() 
    {
        if(this.state.loginstatus){
            return <Navigate to="/"/>
        }

        return <>
            <div class="brand_color">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2>User Registeration and Login</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='row'>
                <div className='col-lg-6'>
                    <h2>User Registeration</h2>
                    <form class="main_form" onSubmit={this.register}>
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <input ref={c=>this.namebox=c} class="form-control" placeholder="Your name" type="text" name="Your Name" required/>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <input ref={c=>this.phonebox=c} class="form-control" placeholder="Phone" type="text" name="Phone" required/>

                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <input ref={c=>this.emailbox=c}class="form-control" placeholder="Email" type="text" name="Email" required />
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <input ref={c=>this.pwdbox=c}class="form-control" placeholder="Password" type="password" required/>
                            </div>
                            <div class="col-md-12">
                                <textarea ref={c=>this.addressbox=c} class="textarea" placeholder="Address" required></textarea>
                            </div>
                            <div class="col-md-6">
                                &nbsp;
                                <b className='text-danger'>{this.state.regmsg}</b>
                            </div>
                            <div class="col-md-6">
                                <button type='submit' class="send">Register</button>                               
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-lg-6'>
                <h2>User Login</h2>
                    <form class="main_form" onSubmit={this.login}>
                        <div class="row">
                            <div class="col-lg-12">
                                <input ref={c=>this.loginemailbox=c}class="form-control" placeholder="Email" type="text" name="Email" required/>
                            </div>
                            <div class="col-lg-12">
                                <input ref={c=>this.loginpwdbox=c}class="form-control" placeholder="Password" type="password" required />
                            </div>                          
                            <div class="col-md-6">
                                &nbsp;
                                <b className='text-danger'>{this.state.loginmsg}</b>
                            </div>
                            <div class="col-md-6">
                                <button type='submit' class="send">Login</button>                               
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    }
}

export default Login