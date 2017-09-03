import React from 'react';

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
                      <li><a href="#">HOME</a></li>
                      <li><a href="#">ABOUT ME</a></li>
                      <li><a href="#">CONTACT</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        );
    }

};

export default Navigation;
