import { configureStore } from "@reduxjs/toolkit";
import authRed from "../features/auth/authSlice";
import userRed from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    auth: authRed,
    user: userRed,
  },
});
