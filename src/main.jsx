import React from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import App from './components/App';
import Overview from './components/Overview';
import Subscriptions from './components/Subscriptions';

export default function () {
    return (
        <div>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Overview}/>
                    <Route path="subscriptions" component={Subscriptions}/>
                </Route>
            </Router>
        </div>
    );
};