import React from 'react';

class Header extends React.Component {
 
    render() {
        const reactLogo = require('../../images/reactLogo.png');
        const flickrLogo = require('../../images/flickrLogo.png');
        return (
            <div className="jumbotron bg-secondary">
                <div className="container">
                    <h1><img src={ flickrLogo } alt="Flickr" height="80" /> API Application</h1>
                    <p className="pull-right">A showcase app using <img src={ reactLogo } alt="React.js" height="30" /></p>
                </div>
            </div>
        );
    }

};

export default Header;
