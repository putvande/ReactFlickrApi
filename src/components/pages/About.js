import React from 'react';

export default class About extends React.Component {
  render() {
    const aboutImg = require('../../images/aboutMe.jpg');
    return (
      <div className="container about">
        <div className="col-xs-12 col-sm-4 col-lg-4 aboutImg">
          <img src={ aboutImg } alt="about me" className="pull-left" />
        </div>
        <div className="col-xs-12 col-sm-8 col-lg-8">
            <h2>About Me</h2>
            <p>I am currently a senior front end engineer at IBM and I specialize in building UI for enterprise level applications.</p>
            <p>I started out in the field of Electronics / Micro-Controllers and have a deep understanding of the different hardware and protocols that drive the web and computing in general.</p>
            <p>I have a strong grasp on many different programming languages, frameworks and design methodologies.</p>
            <p>I enjoy exploring the latest web technologies and have recently designed and applications utilizing the latest JavaScript libraries and frameworks including React.js, Node.js, RXJS and Redux/Flux.</p>       
            <p>I have embraced working in an agile environment and understand all of its values and principles. </p>       
            <p>My experience goes beyond pure programming, well into the realms of graphic and UX design. I am an advanced user of the Adobe Creative Suite. I understand the process of creating cross-browser / cross-platform, standards compliant sites and applications from the bottom up using wire-framing and graphic design techniques.</p>       
            <p>I like the web to be an immersive experience and endeavor to make it so in every project that I take on.</p>
        </div>
      </div>
    )
  }
}
