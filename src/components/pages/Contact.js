import React from 'react';

export default class Contact extends React.Component {
  render() {
    const linkedInLogo = require('../../images/linkedInLogo.png');
    const facebookLogo = require('../../images/fbLogo.png');
    return (
      <div className="container contact center-block">
        <h2>Contact Me</h2><br/>
        <p><strong>Contact Me by Email: </strong><a href="mailto:willedwards@lycos.com"><span className="glyphicon glyphicon-envelope"></span> willedwards@lycos.com</a></p>
        <p><img src={ facebookLogo } height="30" alt="facebook" /> &nbsp;&nbsp;<a target="_blank" href="https://www.facebook.com/profile.php?id=578696998">Or on Facebook</a></p>
        <p><img src={ linkedInLogo } height="30" alt="facebook" /> &nbsp;&nbsp;<a target="_blank" href="https://www.linkedin.com/in/will-edwards-72b36a87">Or on LinkedIn</a></p>
      </div>
    )
  }
}