import React, {PropTypes} from 'react';
import Header from './pageWrappers/Header';
import Navigation from './navigation/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pageWrappers/Footer';
import { Route } from 'react-router-dom';

 class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Navigation />
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
        <Footer />
      </div>
    )
  }
};

export default App;