import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Data from './Tasks/githubUser/data';


 class App extends Component {
  render() {
    
    return (
      <>
      <div className="app">
        <Data />
      
       
      </div>
      </>
    )
  }
}

export default App

