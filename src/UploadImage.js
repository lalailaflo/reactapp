import React, { Component } from 'react';

class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
    this.state = {
      fields:{
        image:'',
        idTask:this.props.idel,
      }
    }
  }
  uploadImage(fields) {
    const theUrl = 'http://localhost:3001/uploads';
    fetch(theUrl, {
      method: 'POST',
      headers: {
        'content-type': 'multipart/form-data',
      },
      body: fields,
    }).then((data) => {
      // this.props.renderFetch();
      console.log(data);
      this.props.renderFetch();
    }).catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }
  inputChangeHandler(e) {
    const fields = { ...this.state.fields };
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }
  render() {
    return (
    <form onSubmit={this.uploadImage(this.state.fields)} id="form">
        <label>Upload Image</label>
        <input type="file" id="imageUploader" name="image" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.fields.image}  />
        <input type="submit" value="Upload"/>
    </form>
    /*<div id="form">
        <label>Upload Image</label>
        <input type="file" id="imageUploader" name="image" />
        <button type="button" onClick={this.uploadImage}>Upload</button>
    </div>*/
    );
  }
}

export default UploadImage;
