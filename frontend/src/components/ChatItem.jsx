import React from 'react';
import PropTypes from 'prop-types';
import './ChatItem.css';

const ChatItem = ({
  profilePicture,
  name,
  lastMessage,
  lastMessageTimestamp,
}) => (
  <li id="chatItemContainer">
    <p id="profilePicture">{profilePicture}</p>
    <div id="nameAndLastMessageContainer">
      <p id="name">{name}</p>
      <p id="lastMessage">{lastMessage}</p>
    </div>
    <p id="lastMessageTimestamp">{lastMessageTimestamp}</p>
  </li>
);

ChatItem.propTypes = {
  profilePicture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  lastMessageTimestamp: PropTypes.string.isRequired,
};

export default ChatItem;
