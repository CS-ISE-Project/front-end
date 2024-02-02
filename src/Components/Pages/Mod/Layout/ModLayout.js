import React from "react";
import Footer from "../../../Shared/Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import SecondTable from "../../Admin/Layout/SecondTable";


function ModLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <SecondTable />
      <Footer />
    </div>
  );
}

export default ModLayout;
