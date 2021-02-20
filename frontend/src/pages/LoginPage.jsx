import React from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = () => {
    console.log('Ok');
  };

  return (
    <div id={styles.pageContainer}>
      <h1>Hey</h1>
      <form onSubmit={handleSubmit} id={styles.loginForm}>
        <input
          type="text"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          placeholder="Phone number"
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Password"
        />
      </form>
    </div>
  );
};

export default LoginPage;
