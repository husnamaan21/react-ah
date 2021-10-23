import React, { Component } from 'react';
// import Box from './Tasks/box';
import RedAlice from './Tasks/RedAlice';
import './Tasks/style.css'


 class App extends Component {
  render() {
    
    return (
      <>
      <div className="app">
  
      <RedAlice />
      {/* <Box /> */}
       
      </div>
      </>
    )
  }
}

export default App

