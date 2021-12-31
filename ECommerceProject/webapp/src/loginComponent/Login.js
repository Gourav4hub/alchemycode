import React from 'react'
import userService from '../services/UserService'
class Login extends React.Component 
{
    register = (event)=>{
        var ob = {
            name : this.namebox.value,
            phone : this.phonebox.value,
            email : this.emailbox.value,
            password : this.pwdbox.value,
            address : [this.addressbox.value]
        }
        console.log(ob)
        userService.saveUser(ob);
        event.preventDefault()
    }

    render() {
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
                            <div class=" col-md-12">
                                <button type='submit' class="send">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-lg-6'>
                <h2>User Login</h2>
                    <form class="main_form">
                        <div class="row">
                            <div class="col-lg-12">
                                <input class="form-control" placeholder="Email" type="text" name="Email" />
                            </div>
                            <div class="col-lg-12">
                                <input class="form-control" placeholder="Password" type="password" />
                            </div>                          
                            <div class=" col-md-12">
                                <button class="send">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    }
}

export default Login