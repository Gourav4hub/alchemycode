import React from 'react'
import { Link } from 'react-router-dom'
export default class Menu extends React.Component
{
    render()
    {
        return <div className="responsive-nav">
        <i className="fa fa-bars" id="menu-toggle"></i>
        <div id="menu" className="menu">
          <i className="fa fa-times" id="menu-close"></i>
          <div className="container">
            <div className="image">
              <a href="#"><img src="assets/images/author-image.jpg" alt="" /></a>
            </div>
            <div className="author-content">
              <h4>Reflux Me</h4>
              <span>Web Designer</span>
            </div>
            <nav className="main-nav" role="navigation">
              <ul className="main-menu">
                <li><Link to="/">Home</Link></li>                
                <li><Link to="/work">My Work</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </nav>
            <div className="copyright-text">
              <p>Copyright 2019 Reflux Design</p>
            </div>
          </div>
        </div>
      </div>
    }
}