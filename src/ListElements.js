import React, { Component } from 'react';
const theUrl = 'http://localhost:3001/tasks';

class ListElements extends Component {
  constructor(props){
    super(props)
      this.state = {tasks: []};
      this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    let curComp = this;
    fetch(theUrl)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        return response.json()
      }
    ).then(function(data) {
      curComp.setState({tasks:data});
      })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
      
  }
  render() {
  
    return (
      <ul>
      {this.state.tasks.map(function(listValue,index){
        return <li key={index}>{listValue.name}</li>;
      })}
    </ul>
      
    );
  }
}

export default ListElements;
