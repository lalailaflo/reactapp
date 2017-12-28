import React, {Component} from 'react';

class RemoveElement extends Component{
    removeElement(){
        let id= this.props.elId;
        let theUrl = 'http://localhost:3001/tasks/'+id;
        
        fetch(theUrl,{
            method:'DELETE'        
        }).then((data) => {
            this.props.updateList();
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
        
    }

    render(){
        return (
            <div>
 
            <button id="btn-remove" onClick={this.removeElement.bind(this)}>Eliminar</button>
            </div>
        )
    }
}
export default RemoveElement;
