import React, { Component } from 'react';
import './Tasks/react-todo/style.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todo from './Tasks/react-todo/todo'


 class App extends Component {
  render() {
    
    return (
      <>
      <div className="app">
     <Todo />
      
       
      </div>
      </>
    )
  }
}

export default App

