import { useState } from "react";
import { Link } from "react-router-dom";

function CTA() {
  const getNumberUsers = async () => {
    try {
      const response = await fetch(
        `https://ise-project-api-production.up.railway.app/users/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const user = await response.json();
      setNbUsers(Object.keys(user).length);
    } catch (e) {
      console.error("Failed getting users:", e);
    }
  };
  getNumberUsers();
  const [nbusers, setNbUsers] = useState(0);
  return (
    <section className="px-8">
      <p className="font-regular text-Typo font-Natasha md:text-[4rem] text-[2rem] text-center">
        Join the {nbusers} users now.
      </p>
      <div className="flex flex-col md:flex-row  items-center justify-center my-10 my-15 gap-4 ">
        <Link to="/UserLogin">
          <button className="bg-Purple100 text-[24px] md:text-[32px] px-[4vw] md:px-[2vw] md:py-[1.5vh] w-[200px] md:w-auto h-[72px] md:h-auto text-white border-2 border-Purple100 rounded-[4px]">
            Login
          </button>
        </Link>
        <Link to="/UserRegister">
          <button className="text-[24px] md:text-[32px] px-[4vw] md:px-[2vw] md:py-[1.5vh] w-[200px] md:w-auto h-[72px] md:h-auto text-Purple100 border-2 border-Purple100 rounded-[4px]">
            Register
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CTA;
