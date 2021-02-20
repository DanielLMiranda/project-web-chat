import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export default function Routes() {
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/home" exact component={HomePage} />
    </Switch>
  </BrowserRouter>;
}
