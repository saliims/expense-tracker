import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";
import { toast } from "react-hot-toast";

const initialState = {
  loading: false,
  userInfo: {},
  userToken: localStorage.getItem("userToken") || null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
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
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      toast.error(action.payload);
    });
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
