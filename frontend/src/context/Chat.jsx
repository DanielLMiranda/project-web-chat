import React from 'react';
import PropTypes from 'prop-types';

const ChatContext = React.createContext();

const ChatProvider = ({ children }) => {
  const [chat, setChat] = React.useState({
    userId: '',
    userName: '',
    currentChatId: '',
    currentChatName: '',
    chatsList: [
      {
        chatId: '12345',
        profilePicture: 'Picture',
        name: 'Test 1',
        lastMessage: 'Test of last message 1',
        lastMessageTimestamp: '14:00',
      },
      {
        chatId: '54321',
        profilePicture: 'Picture',
        name: 'Test 2',
        lastMessage: 'Test of last message 2',
        lastMessageTimestamp: '14:00',
      },
    ],
  });

  return (
    <ChatContext.Provider value={{ chat, setChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => React.useContext(ChatContext);

ChatProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default ChatProvider;
