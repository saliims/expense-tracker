import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authentication/authSlice";
import { authApi } from "./services/authentication/authServices";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(authApi.middleware),
});

export default store;
