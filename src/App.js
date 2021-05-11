import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import IframeTest from './features/IframeTest';
import TextBtn from './features/TextBtn';
// import Header from './features/Header/component';
// import Dashboard from './features/Dashboard/container';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={IframeTest} path="/reputeiframe" exact />
        <Route component={TextBtn} path="/web_app1" exact />
      </Switch>
    </Router>
  );
}

export default App;
