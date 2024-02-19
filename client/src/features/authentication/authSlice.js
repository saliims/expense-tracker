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
    [userLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload.user;
      state.userToken = action.payload.token;
      toast.success(action.payload.message);
    },

    [userLogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
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
    });
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
