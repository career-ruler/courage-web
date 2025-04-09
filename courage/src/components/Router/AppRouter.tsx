import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "pages/Auth/page";
import HomePage from "pages/Home/page";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={< SignupPage/>} />
      <Route path="/" element={<HomePage/>} />
    </Routes>
  );
};

export default AppRouter;
