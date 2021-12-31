import React from 'react'
import {Link} from 'react-router-dom'
import Store from '../appredux/store'
import {ACTION_USER_LOGOUT} from '../appredux/actions/UserAction'
import {connect} from 'react-redux'
var mapStateToProps = state => {
   return {
      user: state.user,
   }
}

class Menu extends React.Component
{
   logout = ()=>{
      Store.dispatch({...ACTION_USER_LOGOUT})
   }

  render(){
    return <>
        <header>        
         <div className="header">
         <div className="container">
            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                     <div className="center-desk">
                        <div className="logo"> <a href="index.html"><img src="images/logo.jpg" alt="logo"/></a> </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                  <div className="menu-area">
                     <div className="limit-box">
                        <nav className="main-menu">
                           <ul className="menu-area-main">                              
                  <li> <Link to="/">Home</Link> </li>
                  
                  {this.props.user.loginstatus?<li><Link to="/profile">Profile ({this.props.user.username})</Link></li>:<></>}
                               
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
               <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                  {this.props.user.loginstatus?<li><a className="buy" href='#' onClick={this.logout}>Logout</a></li>:<li><Link className="buy" to="/login">Login</Link></li>}
                  
               </div>
            </div>
         </div>   
         </div>      
      </header>      
    </>
  }
}

export default connect(mapStateToProps)(Menu)