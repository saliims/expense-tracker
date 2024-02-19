import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = "http://127.0.0.1:3000";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ identifier, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendUrl}/api/login`,
        { identifier, password },
        config
      );
      localStorage.setItem("userToken", data.token);
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
