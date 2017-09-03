import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  // Bootstrap Navbar and Mobile Navbar
    render() {
        return (
            <div>
              <div className="navbar navbar-inverse">
                <div className="container">
                  <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navHeaderCollapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navHeaderCollapse">
                    <ul className="nav navbar-nav navbar-left">
                      <li><Link to='/'>Home</Link></li>
                      <li><Link to='/about'>About Me</Link></li>
                      <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        );
    }

};

export default Navigation;
