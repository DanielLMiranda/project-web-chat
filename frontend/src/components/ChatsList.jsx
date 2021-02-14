import React from 'react';
import { useChat } from '../context/Chat';
import ChatItem from './ChatItem';

const ChatsList = () => {
  const { chat } = useChat();

  if (!chat.chatsList) return null;
  return (
    <ul>
      {chat.chatsList.map((chatItem) => (
        <ChatItem
          profilePicture={chatItem.profilePicture}
          name={chatItem.name}
          lastMessage={chatItem.lastMessage}
          lastMessageTimestamp={chatItem.lastMessageTimestamp}
          key={chatItem.chatId}
        />
      ))}
    </ul>
  );
};

export default ChatsList;
