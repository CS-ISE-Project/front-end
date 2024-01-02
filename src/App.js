import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useContext } from "react";
import AdminLayout from "./Components/Pages/Admin/Layout/AdminLayout";
import Login from "./Components/Pages/Auth/Login";
import Register from "./Components/Pages/Auth/Register";
import ModLayout from "./Components/Pages/Mod/Layout/ModLayout";
import Home from "./Components/Pages/Home/Home";
import UserLayout from "./Components/Pages/User/Layout/UserLayout";
import Search from "./Components/Pages/User/Pages/Search";
import Results from "./Components/Pages/User/Pages/Results";
import ArticleDetails from "./Components/Pages/User/Pages/ArticleDetails";
import UserProfile from "./Components/Pages/User/Pages/UserProfile";

export default function App() {
  const AdminContext = createContext(1);
  const ModContext = createContext(1);
  const UserContext = createContext(1);
  const isAdmin = useContext(AdminContext);
  const isMod = useContext(ModContext);
  const isUser = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        {/* Default routes */}
        <Route>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Admin routes */}
        {isAdmin && (
          <Route element={<AdminLayout />} path="/admin">
            {/* Admin routes */}
          </Route>
        )}

        {/* Moderator routes */}
        {isMod && (
          <Route element={<ModLayout />} path="/mod">
            {/* Moderator routes */}
          </Route>
        )}

        {/* User routes */}
        {isUser && (
          <Route element={<UserLayout />} path="/user">
            <Route index element={<Search />} />
            <Route element={<Results />} path="results" />
            <Route element={<ArticleDetails />} path="article" />
            <Route element={<UserProfile />} path="profile" />
            {/* User routes */}
          </Route>
        )}

        {/* Auth routes, no layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
