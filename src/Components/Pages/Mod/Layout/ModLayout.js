import React from "react";
import Footer from "../../../Shared/Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function ModLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default ModLayout;
