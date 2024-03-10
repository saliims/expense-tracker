import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authentication/authSlice";
import { authApi } from "./services/authentication/authServices";
import expenseReducer from "./features/expenses/expenseSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expenses: expenseReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(authApi.middleware),
});

export default store;
