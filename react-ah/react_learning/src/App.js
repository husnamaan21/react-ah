import React, { Component } from 'react';
import Data from './Tasks/Task1/Data';
import Header from './Tasks/Task1/Header';
import './Tasks/Task1/main.css';

 class App extends Component {
  render() {
    return (
      <>
      <div className="app">
        <Header />
        <Data />
      </div>
      </>
    )
  }
}

export default App

