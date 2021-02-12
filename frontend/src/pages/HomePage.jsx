import React from 'react';
import ChatInput from '../components/ChatInput';
import './HomePage.css';

const HomePage = () => (
  <div id="pageContainer">
    <section id="chatsList">
      <p>Header 1</p>
    </section>
    <section id="chatView">
      <div>Header 2</div>
      <div>Chat View</div>
      <ChatInput />
    </section>
  </div>
);

export default HomePage;
