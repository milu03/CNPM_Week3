import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import FormWrapper from '../components/FormWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <FormWrapper title="Login">
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex items-center justify-between">
        <Button label="Login" onClick={handleSubmit} />
      </div>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </FormWrapper>
  );
};

export default Login;
