import React, { useState } from 'react';
import io from 'socket.io-client';
import './ChatInput.css';
import { ReactComponent as SendIcon } from '../send-icon.svg';

const socket = io('http://localhost:3001');

const ChatInput = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      socket.emit('message', input);
      setInput('');
    }
  };

  return (
    <div id="chatInputContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={({ target }) => setInput(target.value)}
          autoComplete="off"
          placeholder="Type a message"
        />
        <button type="submit" id="sendButton">
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
