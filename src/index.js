import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Personaje from './Personaje';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
  <Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/personaje/:id" component={Personaje} />
    </Switch>
   </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);
