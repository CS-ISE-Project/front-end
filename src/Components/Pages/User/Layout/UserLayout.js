import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../../../Shared/Footer";

function UserLayout() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserLayout;
