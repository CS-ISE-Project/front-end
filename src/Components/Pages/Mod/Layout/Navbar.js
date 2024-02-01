import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  const userName = "Abdelkarim Bengherbia";
  return (
    <>
      <nav className="w-full md:h-[112px] h-[88px] bg-white fixed top-0 z-[100]">
        <div className="flex items-center px-[8vw] h-full justify-between">
          <Link>
            <img
              alt="Logo"
              className="sm:w-[25vw] md:w-[15vw] lg:w-[10vw]"
              src="/logo.png"
            ></img>
          </Link>
          <div className="flex gap-[16px] items-center ">
            <div>
              <p className="bg-Blue66 py-2 px-4 text-white rounded">
                Modérateur
              </p>
            </div>
            <p className="font-bold text-Blue66">{userName}</p>
            <FaChevronDown className="text-Blue66" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
