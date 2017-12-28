import React, {Component} from 'react';

class AddElement extends Component{
    constructor(props){
        super(props)
        this.state = { 
            addTask: false,
            text:''
        };
        this.toggleTask = this.toggleTask.bind(this);
        this.addEl = this.addEl.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }
    addEl(){
        let theUrl = 'http://localhost:3001/tasks';
        let formData = {
            name: this.state.text
        } 
        
        fetch(theUrl,{
            headers: {
                'content-type': 'application/json'
              },
            method:'POST',
            body:JSON.stringify(formData)
        }).then((data)=>{
            console.log(data);
            this.setState({addTask:false,text:''});
            this.props.updateList();
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
        
    }
    toggleTask(){
        const addTask = !this.state.addTask;
        this.setState({ addTask });
    }
    onTextChanged(e){
        this.setState({text:e.target.value});
    }
    renderForm(){
        if(this.state.addTask){
            return (
            <form id="formAdd">
                <input id="txtName" onChange={this.onTextChanged}/>
                <button type="button" onClick={this.addEl}>Agregar</button>
            </form>);
        }
    }
    render(){
        
        return (
            
            <div>
             <button type="button" onClick={this.toggleTask}>Agregar tarea</button>   
            
            {this.renderForm()}
            </div>
        )
    }
}
export default AddElement;