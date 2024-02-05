import React from "react";
import LoginForm from "./LoginForm";

function Login() {
  const path = window.location.pathname;
  return (
    <div className="flex flex-col-reverse py-10 md:flex-row md:py-[80px] lg:py-[150px] items-center gap-[100px] md:gap-[60px] lg:gap-[100px]  text-white md:h-screen w-screen sm:flex-col-reverse px-[8vw]">
      <LoginForm type={path} />
      <img
        className="w-[80vw] md:w-[40vw] lg:w-[45vw]"
        src="illustrationAuth.png"
        alt="illustration"
      />
    </div>
  );
}

export default Login;
