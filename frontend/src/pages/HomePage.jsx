import React from 'react';
import socket from '../socket';
import ChatInput from '../components/ChatInput';
import MainHeader from '../components/MainHeader';
import ChatHeader from '../components/ChatHeader';
import ChatsList from '../components/ChatsList';
import styles from './HomePage.module.css';

const username = 'Daniel';

const HomePage = () => {
  React.useEffect(() => {
    socket.auth = { username };
    socket.connect();
  }, []);

  return (
    <div id={styles.pageContainer}>
      <section id={styles.chatsList}>
        <MainHeader />
        <ChatsList />
      </section>
      <section id={styles.chatView}>
        <ChatHeader />
        <div>Chat View</div>
        <ChatInput />
      </section>
    </div>
  );
};

export default HomePage;
