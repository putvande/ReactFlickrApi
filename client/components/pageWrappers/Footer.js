import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className="navbar navbar-inverse navbar-fixed-bottom footer">
                <div className="container">
                    <p className="navbar-text pull-left"><em>An app designed to showcase my skills in React.js by</em> <strong>Will Edwards</strong></p>
                    <a href="https://github.com/silversurfer5150/ReactFlickrAPI" target="_blank" className="navbar-btn btn btn-info pull-right">Get the code on GitHub</a>
                    <p className="text-muted btn-align">
                        <a href="mailto:willedwards@lycos.com" className="btn-align pull-right">Email Me: willedwards@lycos.com</a>
                    </p>
                </div>
            </div>
        );
    }

};

export default Footer;
