import React, {PropTypes} from 'react';
import Header from './pageWrappers/Header';
import Navigation from './navigation/Navigation';
import ContentContainer from './pageWrappers/ContentContainer'
import Footer from './pageWrappers/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <ContentContainer />
        <Footer />
      </div>
    )
  }
}