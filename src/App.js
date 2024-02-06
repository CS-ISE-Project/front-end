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
import Table from "./Components/Pages/Admin/Pages/Table";
import SecondTable from "./Components/Pages/Admin/Pages/SecondTable";
import Error from "./Components/Shared/Error";
import Inactive from "./Components/Pages/Mod/Pages/Inactive";
import Articles from "./Components/Pages/Mod/Pages/Articles";
import EditArticle from "./Components/Pages/Mod/Pages/EditArticle";

export const EndpointRoot = "https://ise-project-api-production.up.railway.app"
export const Context = createContext();
export default function App() {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || {
      isMod: 0,
      isAdmin: 0,
      isUser: 0,
    }
  );
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
              <Route index element={<Table />} />
              <Route element={<SecondTable />} path="article" />
            </Route>
          )}

          {/* Moderator routes */}
          {isMod && (
            <Route element={<ModLayout />} path="/mod">
              <Route element={<Articles />} index />
              <Route element={<EditArticle />} path="EditArticle" />
            </Route>
          )}
          <Route element={<Inactive />} path="/inactive" />

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
          <Route exact path="/8b2790f4436aa223df987b6e32d68c3f97c521e943669219f042dadd1cf55f3f" element={<Login />} />
          <Route exact path="/aa9922472061e207324dfec5df3a0925c634fdf43d243ca4b7874b98bc4c8df0" element={<Register />} />
          <Route exact path="/b7e43cb8e8c5ee46dc353d35b26135993f8bdc5caf58246f30c9f6c30d625217" element={<Login />} />
          <Route exact path="/ff46f256af3658afb8e2ccdf0c81c934fe0d1c3b09783a0e60fc166ef391f68f" element={<Register />} />

          {/*404*/}
          <Route path="*" element={<Error />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}
