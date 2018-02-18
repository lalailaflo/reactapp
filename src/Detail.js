import React, { Component } from 'react';
import UploadImage from './UploadImage';

class Detail extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.task.name}</h2>
                <div>
                    <small>Created on {this.props.task.Created_date}</small>
                    <small>State: {this.props.task.status}</small>
                </div>
                <div className="imagen">{this.props.task.image}</div>
                <UploadImage renderFetch={this.props.renderFetch} idel={this.props.idel}/>
            </div>
        );
    }
}
export default Detail;
