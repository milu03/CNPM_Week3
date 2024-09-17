import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import FormWrapper from '../components/FormWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordUser } from '../features/auth/authSlice';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordUser(email));
  };

  return (
    <FormWrapper title="Forgot Password">
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex items-center justify-between">
        <Button label="Reset Password" onClick={handleSubmit} />
      </div>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </FormWrapper>
  );
};

export default ForgotPassword;
