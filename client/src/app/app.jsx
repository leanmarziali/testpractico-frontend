import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './app.style.scss';
import Home from './views/Home/Home';

class App extends Component {
  
  render() {
    return (
        // Prop exact is not necessary. We want to render Home anyway
        <Route
          path="/" 
          component={Home} 
        />
    );
  }
}

export default App;
