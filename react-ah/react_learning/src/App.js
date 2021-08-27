import React, { Component } from 'react';

import Display from './Tasks/Task2/Display';
import './Tasks/Task1/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

 class App extends Component {
  render() {
    return (
      <>
      <div className="app">
       <Display />
      </div>
      </>
    )
  }
}

export default App

