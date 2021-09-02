import React, { Component } from 'react';
import Carosal from './Tasks/Carosal/components/carosal';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 class App extends Component {
  render() {
    return (
      <>
      <div className="app">
      <Carosal />
      </div>
      </>
    )
  }
}

export default App

