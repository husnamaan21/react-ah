import React, { Component } from 'react'

 class App extends Component {
  render() {
    return (
      <div>
        <h1>hello I am {this.props.children}</h1>
      </div>
    )
  }
}

export default App

