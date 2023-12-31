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
              className="sm:w-[25vw] md:w-[15vw] lg:w-[10vw]"
              src="/logo.png"
            ></img>
          </Link>
          <div className="flex gap-[10px]">
            <Link to="/Register">
              <button className="hidden md:block text-[14px] md:text-[18px] px-[4vw] md:px-[2vw] py-[1.5vh] text-Purple100 border-2 border-Purple100 rounded-[8px]">
                S’inscrire
              </button>
            </Link>
            <Link to="/Login">
              <button className="hidden md:block bg-Purple100 text-[14px] md:text-[18px] px-[4vw] md:px-[2vw] py-[1.5vh] text-white rounded-[8px]">
                Connexion
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
