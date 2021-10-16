import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import Nav from './Tasks/router/nav';
import { Route } from 'react-router';
import Men from './Tasks/router/Men';
import Women from './Tasks/router/Women';
import Kids from './Tasks/router/Kids';
import Home from './Tasks/router/Home';
import Page from './Tasks/router/page';
import Id from './Tasks/router/id';
import Formal from './Tasks/router/formal';


 class App extends Component {
  render() {
    
    return (
      <>
      <div className="app">
       <Router basename="husna's-web" >
        <Nav />
       
        <Switch>
        < Route path="/" exact component={Formal} />
        < Route path="/men" exact component={Men} />
        < Route path="/women" exact component={Women} />
        < Route path="/:category" exact component={Id} />
        < Route path="/formal" exact component={Home} />
        < Route path="/kids" exactcomponent={Kids}  >
     
        < Route  path="*" component={Page} />

      </Route>
     
        </Switch>
        </Router>
      
       
      </div>
      </>
    )
  }
}

export default App

