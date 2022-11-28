import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BaseUrl = "http://realdate.prometteur.in:3357";

export const fetchUserList = createAsyncThunk("users/usersList", async () => {
  try {
    let res = await axios.get(`${BaseUrl}/userList`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2MzYzODcwZjI2ODQ2OGQ4NWIyMTliNmQiLCJpYXQiOjE2Njc4Mzk0MjksImV4cCI6MTY2Nzg3NTQyOX0.AgG-sjMJXSNCwkfwT1fpFmnJSBJmE0E-6nWXGnFgrpo",
      },
    });
    console.log("res getting frrom slice", res);
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    userlist: [],
    status: "",
  },
  extraReducers: {
    [fetchUserList.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchUserList.fulfilled]: (state, action) => {
      state.status = "fullfilled";
    },
    [fetchUserList.rejected]: (state, action) => {
      state.status = "rejeted";
    },
  },
});

export default userSlice.reducer;
