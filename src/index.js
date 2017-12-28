import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import DetailFetch from './DetailFetch';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={ App }/>
            <Route path='/detail/:idElement' component={ DetailFetch } />
        </Switch>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
