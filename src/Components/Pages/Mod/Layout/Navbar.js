import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

function Navbar() {
  const userName = localStorage.getItem("username");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [page, setPage] = useState(1);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <nav className="w-full md:h-[112px] h-[88px] bg-white fixed top-0 z-[100]">
        <div className="flex items-center px-[8vw] h-full justify-between">
          <Link>
            <img
              alt="Logo"
              className="sm:w-[9vw] md:w-[5vw] lg:w-[4vw]"
              src="/logo.png"
            ></img>
          </Link>
          <div className="flex flex-col">
            <div
              className={`flex gap-[16px]  items-center ${
                isDropdownOpen ? "mt-24 " : ""
              } `}
            >
              <div>
                <p className="bg-Blue66 py-2 px-4 text-white rounded">
                  Moderator
                </p>
              </div>
              <p className="font-bold text-Blue66">{userName}</p>

              <FaChevronDown
                className={`text-Blue66 transition-transform duration-300 hover:cursor-pointer  ${
                  isDropdownOpen ? "rotate-180 " : ""
                }`}
                onClick={toggleDropdown}
              />
            </div>
            {isDropdownOpen && (
              <div className="flex flex-col mt-4 bg-white items-center drop-shadow-special px-[4vh]">
                <div
                  className="flex flex-row items-center hover:cursor-pointer border-t border-[#E6E6E6]" /*onClick={handleLogoutClick}*/
                >
                  <MdLogout className="text-Rose66"></MdLogout>
                  <div className="p-2 text-Rose66">Logout</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
