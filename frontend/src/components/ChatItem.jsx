import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatItem.module.css';

const ChatItem = ({
  profilePicture,
  name,
  lastMessage,
  lastMessageTimestamp,
}) => (
  <li id={styles.chatItemContainer}>
    <p id={styles.profilePicture}>{profilePicture}</p>
    <div id={styles.nameAndLastMessageContainer}>
      <p id={styles.name}>{name}</p>
      <p id={styles.lastMessage}>{lastMessage}</p>
    </div>
    <p id={styles.lastMessageTimestamp}>{lastMessageTimestamp}</p>
  </li>
);

ChatItem.propTypes = {
  profilePicture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  lastMessageTimestamp: PropTypes.string.isRequired,
};

export default ChatItem;
