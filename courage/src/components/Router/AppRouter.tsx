import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "pages/Auth/page";
import HomePage from "pages/Home/page";
import ProfilePage from "pages/Profile/page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={< SignupPage/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/profile"  element={<ProfilePage/>} />
    </Routes>
  );
};

export default AppRouter;
