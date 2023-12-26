import React from 'react'
import RegisterForm from './RegisterForm'



function Register() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 items-center py-8 px-5 md:px-[80px] md:py-[60px] lg:px-[160px] lg:py-[80px] md:h-screen">
      <img className="w-[50vw] md:w-[45vw] " src="illustrationRegister.png" alt="" />
      <RegisterForm />
    </div>
  )
}

export default Register