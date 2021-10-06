import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Tasks/router/nav';
import { Route } from 'react-router';
import Men from './Tasks/router/Men';
import Women from './Tasks/router/Women';
import Kids from './Tasks/router/Kids';
import Home from './Tasks/router/Home';

 class App extends Component {
  render() {
    
    return (
      <>
      <div className="app">
       <Router>
        <Nav />
        < Route path="/" exact component={Home} />
        < Route path="/men" exact component={Men} />
        < Route path="/women" exact component={Women} />
        < Route path="/kids" exact ><Kids /></Route>
        </Router>
      
       
      </div>
      </>
    )
  }
}

export default App

