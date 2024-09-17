import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, register, forgotPassword, updateProfile } from './authAPI';

const initialState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
};

// Login action
export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, { rejectWithValue }) => {
  try {
    const response = await login(credentials.email, credentials.password);
    return response; // Điều chỉnh nếu response trả về khác
  } catch (error) {
    return rejectWithValue(error); // Gửi lỗi lên reducer
  }
});

// Register action
export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await register(userData.email, userData.password);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// Forgot Password action
export const forgotPasswordUser = createAsyncThunk('auth/forgotPasswordUser', async (email, { rejectWithValue }) => {
  try {
    const response = await forgotPassword(email);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// Update Profile action
export const updateProfileUser = createAsyncThunk('auth/updateProfileUser', async ({ token, profileData }, { rejectWithValue }) => {
  try {
    const response = await updateProfile(token, profileData);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user; // Điều chỉnh theo cấu trúc response thực tế
        state.token = action.payload.token; // Điều chỉnh theo cấu trúc response thực tế
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Something went wrong';
      });

    // Các trường hợp tương tự cho register, forgot password, và update profile
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
