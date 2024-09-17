import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './app/store'; // Tạo store Redux của bạn
import './index.css'; // Chứa các styles cho TailwindCSS

// Import các trang (screens) cần thiết
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';

// Tạo root cho ứng dụng React
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Provider cho Redux */}
    <Provider store={store}>
      {/* Router cho điều hướng */}
      <Router>
        <Routes>
          {/* Định nghĩa các route và component tương ứng */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/for got-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
