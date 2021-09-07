import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Accordion from './Tasks/react-accordition/accordion';

 class App extends Component {
  render() {
    
    return (
      <>
      <div className="app">
        <Accordion />
      
       
      </div>
      </>
    )
  }
}

export default App

