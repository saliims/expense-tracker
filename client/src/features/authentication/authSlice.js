import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./authActions";
import { toast } from "react-hot-toast";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: {},
  userToken,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("userToken");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      toast.success(action.payload.message);
      state.userInfo = action.payload.user;
      state.userToken = action.payload.token;
    });
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      toast.error(action.payload);
      state.loading = false;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      toast.success(action.payload.message);
    });
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      toast.error(action.payload);
      state.loading = false;
    });
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
