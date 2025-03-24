import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "pages/Auth/page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;
