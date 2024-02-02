import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";
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

export const Context = createContext();

export default function App() {
  const [auth, setAuth] = useState((window.localStorage.getItem("token") === "" )&& {
    isMod: 0,
    isAdmin: 0,
    isUser: 0,
  });
  const { isMod, isAdmin, isUser } = auth;

  return (
    <BrowserRouter>
      <Context.Provider value={[auth, setAuth]}>
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
            </Route>
          )}

          {/* Auth routes, no layout */}
          <Route exact path="/Userlogin" element={<Login />} />
          <Route exact path="/UserRegister" element={<Register />} />
          <Route exact path="/Adminlogin" element={<Login />} />
          <Route exact path="/AdminRegister" element={<Register />} />
          <Route exact path="/Modlogin" element={<Login />} />
          <Route exact path="/ModRegister" element={<Register />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}
