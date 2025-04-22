import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "pages/Auth/page";
import HomePage from "pages/Home/page";
import ProfilePage from "pages/Profile/page";
import PostPage from "pages/Post/page";
import DetailPostPage from "pages/DetailPost/page";
import AiInterviewPage from "pages/AiInterview/page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={< SignupPage/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/profile"  element={<ProfilePage/>} />
      <Route path="/post" element={<PostPage/>} />
      <Route path="/post/:id" element={<DetailPostPage/>} />
      <Route path="/aiInterview" element={<AiInterviewPage/>} />
    </Routes>
  );
};

export default AppRouter;
