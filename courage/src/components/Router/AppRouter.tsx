import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "pages/Auth/page";
import HomePage from "pages/Home/page";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/" element={<HomePage/>} />
    </Routes>
  );
};

export default AppRouter;
