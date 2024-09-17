import axios from 'axios';

const API_URL = '/api/auth'; // Replace with your actual API

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/register`, { name, email, password });
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await axios.post(`${API_URL}/forgot-password`, { email });
  return response.data;
};

export const updateProfile = async (token, profileData) => {
  const response = await axios.put(`${API_URL}/profile`, profileData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};
