import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.task.name}</h2>
                <div>
                    <small>Created on {this.props.task.Created_date}</small>
                    <small>State: {this.props.task.status}</small>
                </div>
            </div>
        );
    }
}
export default Detail;
