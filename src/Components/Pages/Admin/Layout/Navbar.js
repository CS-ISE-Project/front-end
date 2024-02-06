import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Context } from "../../../../App";

function Navbar() {
  const userName = localStorage.getItem("username");
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const storedPage = localStorage.getItem("page");
  const parsedPage = parseInt(storedPage);
  const [page, setPage] = useState(parsedPage);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const [auth, setAuth] = useContext(Context);

  const handleLogout = () => {
    setAuth({
      isMod: 0,
      isAdmin: 0,
      isUser: 0,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    localStorage.removeItem("page");
    alert("logout successful");
    navigate(
      "/8b2790f4436aa223df987b6e32d68c3f97c521e943669219f042dadd1cf55f3f"
    );
  };
  return (
    <>
      <nav className="w-full md:h-[112px] h-[88px] bg-white fixed top-0 z-[100]">
        <div className="flex items-center px-[8vw] h-full justify-between">
          <div
            onClick={() => {
              setPage(1);
              localStorage.setItem("page", 1);
              navigate("/admin");
            }}
          >
            <img
              alt="Logo"
              className="w-[10vw] md:w-[5vw] lg:w-[4vw] hover:cursor-pointer"
              src="/logo.png"
            ></img>
          </div>
          <div className="flex gap-[48px] font-medium text-[.8rem] lg:text-[1.4rem]">
            <div
              onClick={() => {
                setPage(1);
                localStorage.setItem("page", 1);
                setDropdownOpen(false);
                navigate("/admin");
              }}
              className={
                !page
                  ? "text-Typo hover:cursor-pointer"
                  : "text-Blue66 font-bold hover:cursor-pointer"
              }
            >
              Moderators
            </div>
            <div
              onClick={() => {
                setPage(0);
                localStorage.setItem("page", 0);
                setDropdownOpen(false);
                navigate("/admin/article");
              }}
              className={
                page
                  ? "text-Typo hover:cursor-pointer"
                  : "text-Blue66 font-bold hover:cursor-pointer"
              }
            >
              Files
            </div>
          </div>
          <div className=" text-[.8rem] lg:text-[1.4rem] flex flex-col">
            <div
              className={`flex flex-row lg:flex-row gap-[5px] lg:gap-[16px] items-center ${
                isDropdownOpen ? "mt-14 " : ""
              } `}
            >
              <div>
                <p className="hidden lg:block bg-Rose66 py-2 px-4 text-white rounded">
                  Admin
                </p>
              </div>
              <p className="font-bold text-Rose66">{userName}</p>

              <FaChevronDown
                className={`text-Rose66 transition-transform duration-300 hover:cursor-pointer  ${
                  isDropdownOpen ? "rotate-180 " : ""
                }`}
                onClick={toggleDropdown}
              />
            </div>
            {isDropdownOpen && (
              <div className="flex flex-col mt-4 bg-white items-center drop-shadow-special lg:px-[4vh]">
                {/* <div className="w-full text-center">
                    <p className="block lg:hidden bg-Rose66 py-2 px-4 text-white rounded">Admin</p>
                  </div> */}
                <div
                  className="flex flex-row items-center hover:cursor-pointer"
                  onClick={handleLogout}
                >
                  <MdLogout className="text-Rose100"></MdLogout>

                  <div className="p-2 text-Rose100">Logout</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
/*
 */
export default Navbar;
