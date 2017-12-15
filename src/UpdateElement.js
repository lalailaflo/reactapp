import React, {Component} from 'react';

class UpdateElement extends Component{
    editEl(){
        
        let id= this.props.elId;
        let theUrl = 'http://localhost:3001/tasks/'+id;
        let formData = {
            name: document.getElementById('txtName').value
        } 
        
        fetch(theUrl,{
            headers: {
                'content-type': 'application/json'
              },
            method:'PUT',
            body:JSON.stringify(formData)
        }).then((data)=>{
            console.log(data);
  
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
        
    }
    editForm(){
        
        let el = document.getElementById('formEdit');
        let input= document.createElement('input');
        let boton = document.createElement('button');

        input.id = 'txtName';
        boton.innerText = 'Actualizar';
        boton.type = 'button';
        boton.addEventListener('click',this.editEl.bind(this));
        el.appendChild(input);
        el.appendChild(boton);
    }
    render(){
        return (
            <div>
            <button id="btn-editForm" onClick={this.editForm.bind(this)}>Editar</button>
            
            </div>
        )
    }
}
export default UpdateElement;