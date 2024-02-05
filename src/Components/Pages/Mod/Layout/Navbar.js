import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Context } from "../../../../App";

function Navbar() {
  const userName = localStorage.getItem("username");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(Context);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    setAuth({
      isMod: 0,
      isAdmin: 0,
      isUser: 0,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    alert("logout successful");
    navigate("/ModLogin");
  };

  return (
    <>
      <nav className="w-full md:h-[112px] h-[88px] bg-white fixed top-0 z-[100]">
        <div className="flex items-center px-[8vw] h-full justify-between">
          <div
            onClick={() => {
              setPage(1);
              navigate("/mod");
            }}
          >
            <img
              alt="Logo"
              className="sm:w-[9vw] md:w-[5vw] lg:w-[4vw] hover:cursor-pointer"
              src="/logo.png"
            ></img>
          </div>
          <div className="flex flex-col">
            <div
              className={`flex gap-[16px]  items-center ${
                isDropdownOpen ? "mt-14 " : ""
              } `}
            >
              <div>
                <p className="hidden md:block bg-Blue66 py-2 px-4 text-white rounded">
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
                  className="flex flex-row items-center hover:cursor-pointer border-t border-[#E6E6E6]"
                  onClick={handleLogout}
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
