import React from 'react';

const LoginPage = () => {
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  console.log(phone, setPhone, password, setPassword);

  return <div>Test</div>;
};

export default LoginPage;
