import React, { Component } from 'react';
// import logo from './logo.svg';
import ListElements from './ListElements.js';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="container">
      <h1>Test React App</h1>
      <h2>Listado de Elementos</h2>
      <div id="listado"><ListElements/></div>
    </div>
    )
  }
}

export default App;
