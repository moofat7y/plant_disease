import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { getStatus } from "../features/user/userSlice";
import Footer from "../components/footer/Footer";
const MainLayout = () => {
  const { auth } = useSelector((state) => state);
  const { token } = auth;
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getStatus());
    }
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
