import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cards from './Tasks/customHook/cards';

 class App extends Component {
  render() {
    
    return (
      <>
      <div className="app">
        <Cards />
      
       
      </div>
      </>
    )
  }
}

export default App

