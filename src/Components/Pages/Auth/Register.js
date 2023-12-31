import React from "react";
import RegisterForm from "./RegisterForm";

function Register() {
  return (
    <div className="flex flex-col py-10 md:flex-row md:py-[80px] lg:py-[150px] items-center gap-[100px] md:gap-[60px] lg:gap-[100px] text-white md:h-screen w-screen sm:flex-col px-[8vw]">
      <img
        className="w-[80vw] md:w-[40vw] lg:w-[45vw]"
        src="illustrationRegister.png"
        alt=""
      />
      <RegisterForm />
    </div>
  );
}

export default Register;
