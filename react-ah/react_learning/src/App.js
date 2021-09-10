import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Accordions from './Tasks/bootstrap/Accordion';
import ControlledCarousel from './Tasks/bootstrap/Carosal';
// import Crumbs from './Tasks/bootstrap/breadcrumbs';
// import Drop from './Tasks/bootstrap/dropdown';
import Example from './Tasks/bootstrap/Toast1';
import Forms from './Tasks/bootstrap/form';

 class App extends Component {
  render() {
    
    return (
      <>
      <div className="app">
      
      {/* <Crumbs />
      <Drop />
      <Example /> */}
      <Forms />
      {/* <Accordions />
      <ControlledCarousel /> */}
      <Example />
       
      </div>
      </>
    )
  }
}

export default App

