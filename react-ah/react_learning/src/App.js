import React, { Component } from 'react';
import Data from './Tasks/Task1/Data';
import Header from './Tasks/Task1/Header';
import './Tasks/Task1/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Practice from './Tasks/task3/Practice';
import PracticeComponent from './Tasks/task3/practiceComponent';



 class App extends Component {
  render() {
    return (
      <>
      <div className="app">
        {/* <Header />
        <Data /> */}
        <Practice />
        <PracticeComponent />
      
      </div>
      </>
    )
  }
}

export default App

