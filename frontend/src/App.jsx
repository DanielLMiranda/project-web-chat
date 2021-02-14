import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChatProvider from './context/Chat';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ChatProvider>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </ChatProvider>
  );
}

export default App;
