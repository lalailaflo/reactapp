import React, { Component } from 'react';
import Detail from './Detail';


class DetailFetch extends Component {
    constructor(props) {
        super(props);
        this.state = { task: {} };
        this.renderFetch = this.renderFetch.bind(this);
    }
    componentWillMount() {
        this.renderFetch();
    }
    renderFetch() {
        const idel = this.props.location.pathname.split('/')[2];
        const theUrl = `http://localhost:3001/tasks/${idel}`;
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
            this.setState({ task: data });

        })
        .catch((err) => {
            console.log('Fetch Error :-S', err);
        });
    }
    render() {
      
        return <Detail task={this.state.task} />;
    }
}
export default DetailFetch;
