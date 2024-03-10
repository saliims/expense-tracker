// expensesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { addExpense, fetchExpenses } from "./expenseAction";
import toast from "react-hot-toast";

const initialState = {
  expenses: [],
  loading: false,
  error: null,
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    getExpense: (state, action) => {
      state.expenses = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExpenses.fulfilled, (state, action) => {
      state.expenses = action.payload.expenses;
      state.loading = false;
    });
    builder.addCase(fetchExpenses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchExpenses.rejected, (state, action) => {
      state.loading = false;
      toast.error(action.payload);
    });
    builder.addCase(addExpense.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addExpense.fulfilled, (state, action) => {
      state.loading = false;
      state.expenses.push(action.payload.expense);
    });
    builder.addCase(addExpense.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { getExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
