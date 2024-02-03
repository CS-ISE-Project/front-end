import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="w-full md:h-[112px] h-[88px] bg-white fixed top-0 z-[100]">
        <div className="flex items-center px-[8vw] h-full justify-between">
          <Link to="/">
            <img
              alt="Logo"
              className="sm:w-[9vw] md:w-[5vw] lg:w-[4vw]"
              src="/logo.png"
            ></img>
          </Link>
          <div className="flex gap-[10px]">
            <Link to="/UserRegister">
              <button className="hidden md:block text-[14px] md:text-[18px] px-[4vw] md:px-[2vw] py-[1.5vh] text-Purple100 border-2 border-Purple100 rounded-[8px]">
                Register
              </button>
            </Link>
            <Link to="/UserLogin">
              <button className="hidden md:block bg-Purple100 text-[14px] md:text-[18px] px-[4vw] md:px-[2vw] py-[1.5vh] text-white rounded-[8px]">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
