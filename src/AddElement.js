import React, {Component} from 'react';

class AddElement extends Component{
    addEl(){
        
        let theUrl = 'http://localhost:3001/tasks';
        let formData = {
            name: document.getElementById('txtName').value
        } 
        
        fetch(theUrl,{
            headers: {
                'content-type': 'application/json'
              },
            method:'POST',
            body:JSON.stringify(formData)
        }).then((data)=>{
            console.log(data);
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
        
    }
    addForm(){
        let el = document.getElementById('formAdd');
        let input= document.createElement('input');
        let boton = document.createElement('button');
        input.id = 'txtName';
        boton.innerText = 'Agregar';
        boton.type = 'button';
        boton.addEventListener('click',this.addEl);
        el.appendChild(input);
        el.appendChild(boton);
    }
    render(){
        return (
            <div>
            <button id="btn-addForm" onClick={this.addForm.bind(this)}>Agregar elemento</button>
            <form id="formAdd"></form>
            </div>
        )
    }
}
export default AddElement;