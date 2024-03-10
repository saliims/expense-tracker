import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = "http://127.0.0.1:3000";

export const fetchExpenses = createAsyncThunk(
  "expenses",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${backendUrl}/api/expense`, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const addExpense = createAsyncThunk(
  "expenses/addExpense",
  async ({ description, amount, category }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const payload = { description, amount, category };
      const response = await axios.post(
        `${backendUrl}/api/expense`,
        payload,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
