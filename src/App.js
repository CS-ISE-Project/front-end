import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useContext, useState } from "react";
import AdminLayout from "./Components/Pages/Admin/Layout/AdminLayout";
import Login from "./Components/Pages/Auth/Login";
import Register from "./Components/Pages/Auth/Register";
import ModLayout from "./Components/Pages/Mod/Layout/ModLayout";
import Home from "./Components/Pages/Home/Home";
import UserLayout from "./Components/Pages/User/Layout/UserLayout";

export const Context = createContext()


export default function App() {

  const [auth , setAuth] = useState({
    isMod:0,
    isAdmin:0,
    isUser:0
  })
  const {isMod,isAdmin,isUser} = auth
  
  
  
  return (
    <BrowserRouter>
      <Context.Provider value={[auth,setAuth]}>
        <Routes>
          {/* Default routes */}
          <Route>
            <Route path="/" element={<Home />} />
          </Route>

          {/* Admin routes */}
          {/* <AdminContext.Provider value={[isAdmin,setIsAdmin]}> */}
            {isAdmin && (
              
              <Route element={<AdminLayout />} path="/admin">
                {/* Admin routes */}
              </Route>
              
            )} 
          {/* </AdminContext.Provider> */}

          {/* Moderator routes */}
          {/* <ModContext.Provider value = {[isMod,setIsMod]}> */}
            {isMod && (
              <Route element={<ModLayout />} path="/mod">
                {/* Moderator routes */}
              </Route>
            )}
          {/* </ModContext.Provider> */}

          {/* User routes */}
          

          {isUser && (
            
            <Route element={<UserLayout />} path="/user">
              {/* User routes */}
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
