import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import FormWrapper from '../components/FormWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileUser } from '../features/auth/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleUpdate = () => {
    dispatch(updateProfileUser({ token, profileData: { name, email } }));
  };

  return (
    <FormWrapper title="Profile">
      <InputField
        label="Full Name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex items-center justify-between">
        <Button label="Update Profile" onClick={handleUpdate} />
      </div>
    </FormWrapper>
  );
};

export default Profile;
