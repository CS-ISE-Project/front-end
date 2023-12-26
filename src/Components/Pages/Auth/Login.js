import React from 'react'
import LoginForm from './LoginForm'


function Login() {
  return (
    <div className=' flex flex-col-reverse py-10 md:flex-row  md:px-[90px] md:py-[80px] lg:px-[160px] lg:py-[150px] items-center gap-[100px] md:gap-[60px] lg:gap-[100px]  text-white md:h-screen w-screen sm:flex-col-reverse'>
            <LoginForm />
            <img className='w-[80vw] md:w-[35vw] lg:w-[50vw]' src="illustrationAuth.png" alt="illustration" /> 
    </div>
  )
}

export default Login