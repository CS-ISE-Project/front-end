<<<<<<< HEAD
import React from 'react'
import RegisterForm from './RegisterForm'


=======
import React from "react";
import RegisterForm from "./RegisterForm";
>>>>>>> toMerge

function Register() {
  const path = window.location.pathname;
  return (
<<<<<<< HEAD
    <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 items-center py-8 px-5 md:px-[80px] md:py-[60px] lg:px-[160px] lg:py-[80px] md:h-screen">
      <img className="w-[50vw] md:w-[45vw] " src="illustrationRegister.png" alt="" />
      <RegisterForm />
    </div>
  )
=======
    <div className="flex flex-col py-10 md:flex-row md:py-[80px] lg:py-[150px] items-center gap-[100px] md:gap-[60px] lg:gap-[100px] text-white md:h-screen w-screen sm:flex-col px-[8vw]">
      <img
        className="w-[80vw] md:w-[40vw] lg:w-[45vw]"
        src="illustrationRegister.png"
        alt=""
      />
      <RegisterForm type={path}/>
    </div>
  );
>>>>>>> toMerge
}

export default Register;
