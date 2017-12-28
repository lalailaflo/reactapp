import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RemoveElement from './RemoveElement.js';
import UpdateElement from './UpdateElement.js';
import './ListElements.css';

class ListElements extends Component {

  render() {
    return (
      <ul className="listado">
      {this.props.tasks.map((listValue,index)=>{
        let ide = listValue._id;
        return (
          <li key={index}>
            <Link to={`/detail/${ide}`}>{listValue.name}</Link>
            <span><RemoveElement elId={ide} updateList={this.props.updateList}/></span>
            <span><UpdateElement elId={ide} updateList={this.props.updateList}/></span>
          </li>
        );
      })}
    </ul>
      
    );
  }
}

export default ListElements;
