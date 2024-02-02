import React,{ useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";

function Navbar() {
  const userName = localStorage.getItem("username");
  const userid = localStorage.getItem("userid") ;
  const navigate = useNavigate() ;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleProfileUser = async () => {
    try {
      const response = await fetch(
        `https://ise-project-api-production.up.railway.app/users/${userid}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      navigate("/user/profile", { state: data });
    } catch (e) {
      console.error("Failed getting user:", e);
    }
  };

    

  console.log(userid)
  return (
    <>
      <nav className="w-full md:h-[112px] h-[88px] bg-white fixed top-0 z-[100]">
        <div className="flex items-center px-[8vw] h-full justify-between">
          <div>
            <img
              alt="Logo"
              className="sm:w-[25vw] md:w-[15vw] lg:w-[10vw]"
              src="/logo.png"
            ></img>
          </div>

         <div className="flex flex-col"> 

          <div className={`flex gap-[16px]  items-center ${isDropdownOpen ? 'mt-24 ' : '' } `}>
            <div>
              <p className="bg-Purple100 py-2 px-4 text-white rounded">
                Utilisateur
              </p>
            </div>
            <p className="font-bold text-Purple100">{userName}</p>

              <FaChevronDown className={`text-Purple100 transition-transform duration-300 hover:cursor-pointer  ${isDropdownOpen ? 'rotate-180 ' : '' }`}  onClick={toggleDropdown} /> 

          </div>
          {isDropdownOpen && (
           <div className="flex flex-col mt-4 bg-white items-center drop-shadow-special px-[4vh]">

             <div className="flex flex-row items-center hover:cursor-pointer" onClick={handleProfileUser}>
                 <FaRegUser className="text-Typo"></FaRegUser>
                 <div className="p-2 text-Typo ">Profile
                 </div>
              </div>

              <div className="flex flex-row items-center hover:cursor-pointer border-t border-[#E6E6E6]" /*onClick={handleLogoutClick}*/>
              <MdLogout className="text-Rose100"></MdLogout>
              <div className="p-2 text-Rose100" >Logout</div>
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
