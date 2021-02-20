import React from 'react';
import Routes from './routes';
import ChatProvider from './context/Chat';

function App() {
  return (
    <ChatProvider>
      <Routes />
    </ChatProvider>
  );
}

export default App;
