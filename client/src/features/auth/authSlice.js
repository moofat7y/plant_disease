import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { notifyError } from "../../utils/helpers";
import { reset } from "../user/userSlice";

const token = JSON.parse(window.localStorage.getItem("token"));

const initialState = {
  token: token || null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  isFirstLogin: false,
  message: "",
};

export const login = createAsyncThunk(
  "/auth/sigin",
  async ({ data, navigate }, thunkAPI) => {
    try {
      const res = await authService.login(data);
      window.localStorage.setItem("token", JSON.stringify(res.token));
      navigate("/");
      return res?.token;
    } catch (error) {
      notifyError(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const logout = createAsyncThunk("/auth/logout", async (thunkAPI) => {
  try {
    const res = await authService.logout();
    window.localStorage.removeItem("token");
    await thunkAPI.dispatch(reset());
    return res;
  } catch (error) {
    await thunkAPI.dispatch(reset());
    return thunkAPI.rejectWithValue(error?.response?.data?.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
        state.token = null;
        state.isFirstLogin = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Login Success";
        state.token = action.payload;
        state.isFirstLogin = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.isFirstLogin = false;
        state.token = null;
      })
      .addCase(logout.pending, (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.message = "Logout Success";
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.token = null;
      });
  },
});

export default authSlice.reducer;
