import React, { Component } from 'react';
// import logo from './logo.svg';
import ListElements from './ListElements';
import AddElement from './AddElement';
import './App.css';

const theUrl = 'http://localhost:3001/tasks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.updateList = this.updateList.bind(this);
    this.renderFetch = this.renderFetch.bind(this);
  }
  componentDidMount() {
    this.renderFetch();
  }
  updateList() {
    this.renderFetch();
  }
  renderFetch() {
    fetch(theUrl)
      .then((response) => {
        if (response.status !== 200) {
          console.log(`Looks like there was a problem. Status Code:
            ${response.status}`);
          return;
        }
        return response.json()
      })
      .then((data) => {
        this.setState({ tasks: data });
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Test React App</h1>
        <h2>Listado de Elementos</h2>
        <AddElement updateList={this.updateList}/>
        <div id="listado"><ListElements tasks={this.state.tasks} updateList={this.updateList}/></div>
        <form id="formEdit"></form>
      </div>
    );
  }
}

export default App;
