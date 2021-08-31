import React, { Component } from 'react';
import Parent from './Tasks/counter/components/parent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

 class App extends Component {
  render() {
    return (
      <>
      <div className="app">
        <Parent />
      
      </div>
      </>
    )
  }
}

export default App

