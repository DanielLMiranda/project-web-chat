import React from 'react';
import './ChatInput.css';
import { ReactComponent as SendIcon } from '../send-icon.svg';

const ChatInput = () => {
  const [input, setInput] = React.useState('');

  const handleSubmit = () => {
    console.log('Ok');
  };

  return (
    <div id="chatInputContainer">
      <form onSubmit={handleSubmit()}>
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
