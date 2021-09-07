import React, { Component } from 'react';
import Menu from './Tasks/react-menu/menu';
import Header from './Tasks/react-menu/header';
import './Tasks/react-menu/style.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 class App extends Component {
  render() {
    return (
      <>
      <div className="app">
          <Header />
          <Menu />
      </div>
      </>
    )
  }
}

export default App

