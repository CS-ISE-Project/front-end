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

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isMod, setIsMod] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {/* Default routes */}
        <Route>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Admin routes */}
        {isAdmin && <Route element={<AdminLayout />} path="/admin"></Route>}

        {/* Moderator routes */}
        {isMod && <Route element={<ModLayout />} path="/mod"></Route>}

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
        <Route
          exact
          path="/Userlogin"
          element={<Login setters={[setIsUser, setIsAdmin, setIsMod]} />}
        />
        <Route exact path="/UserRegister" element={<Register />} />
        <Route
          exact
          path="/Adminlogin"
          element={<Login setters={[setIsUser, setIsAdmin, setIsMod]} />}
        />
        <Route exact path="/AdminRegister" element={<Register />} />
        <Route
          exact
          path="/Modlogin"
          element={<Login setters={[setIsUser, setIsAdmin, setIsMod]} />}
        />
        <Route exact path="/ModRegister" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
