import React, { Component } from 'react';
import Effect from './Tasks/tourism/effect';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Tourism from './Tasks/tourism/tourism';

 class App extends Component {
  render() {
    
    return (
      <>
      <div className="app">
  
        <Tourism />
        <Effect />

      
       
      </div>
      </>
    )
  }
}

export default App

