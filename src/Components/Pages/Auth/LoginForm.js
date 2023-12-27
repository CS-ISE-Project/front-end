import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function LoginForm  () {
    const navigate = useNavigate()
    const [formData , setFormData ] = useState({
        email:'',
        password:''
    })

    const [formIsValid,setFormIsValid] = React.useState({})
    const [errors,setErrors]= useState({})
    const [isSubmitting , setIsSubmitting] = useState(false)

    function handleChange(e){
        const {name,value} = e.target 
        setFormData(formData =>{
            return {
                ... formData,
                [name]:value
            }
        })
        
        validateField(name,value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsSubmitting(true)
        if(formIsValid){
            console.log(formData)
        }
        
    }

    const validateField = (name,value)=>{
        let formErrors = {...errors}
        switch(name){
            case "email" :
                formErrors.email =
                !value || !/\S+@\S+\.\S+/.test(value)
                ? "Veuillez entrer un email valide."
                : ""
                break;
            case "password" : 
                formErrors.password = 
                !value || value.length < 6
                ? "Veuillez entrer un mot de passe valide."
                :""
                break;

            default: 
            break;
        }   
        setErrors(formErrors)
        setFormIsValid(Object.values(formErrors).every(err => err ===""))
    }

    function handleRegister(){
        navigate('/register')
    }

  return (
    <div className='flex flex-col justify-center items-start w-[80vw] gap-[10px] md:gap-[40px] text-sm md:text-md text-Typo'>
        <p className=' text-2xl md:text-[30px] lg:text-4xl'>Se connecter</p>
        <p className='text-sm text-[#515151]'>Connectez-vous a votre compte ci-dessous</p>
        <form onSubmit={handleSubmit} className='flex gap-[10px] md:gap-[20px] flex-col items-start w-full'>
            <label htmlFor="">Email</label>
            <input 
                className='rounded-md w-full text-black p-3 md:p-4 bg-[#F2F3F6]'
                type="text" 
                name="email"
                onChange={handleChange}
                />
            {isSubmitting && errors.email && <div className='text-Rose100'>{errors.email}</div>}    
            <div className='flex justify-between w-full'>
                <label htmlFor="" className=''>Mot de passe</label>
                <p className='text-Rose100 cursor-pointer'>Mot de passe oublier ?</p>
            </div>
            <input 
                className='rounded-md w-full text-black p-3 md:p-4 bg-[#F2F3F6]' 
                type="password" 
                name='password'
                onChange={handleChange}/>
            {isSubmitting && errors.password && <div className='text-Rose100'>{errors.password}</div>}    
            <button className='w-full rounded-md text-white font-bold bg-[#8D92C9] p-3 md:p-4'>Se connecter</button>
        </form>
        <button className='flex justify-center items-center gap-4 rounded-md bg-[#F2F3F6] w-full p-3 md:p-4'><img src="devicon_google.svg" alt="" />Connexion avec Google</button>
        <p className='self-center'>Vous n'avez pas de compte ? <span className='cursor-pointer text-Blue66' onClick={handleRegister}>Register</span></p>
    </div>
  )
}

export default LoginForm