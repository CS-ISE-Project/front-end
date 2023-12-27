import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [formIsValid, setFormIsValid] = React.useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });

    validateField(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    if (formIsValid) {
      console.log(formData);
    }
  }

  const validateField = (name, value) => {
    let formErrors = { ...errors };
    switch (name) {
      case "email":
        formErrors.email =
          !value || !/\S+@\S+\.\S+/.test(value)
            ? "Veuillez entrer un email valide."
            : "";
        break;
      case "password":
        formErrors.password =
          !value || value.length < 6
            ? "Veuillez entrer un mot de passe valide."
            : "";
        break;

      case "firstName":
        formErrors.firstName =
          !value || !/^[A-Z][^0-9]*$/.test(value)
            ? "Veuillez entrer un prénom valide."
            : "";
        break;
      case "lastName":
        formErrors.lastName =
          !value || !/^[A-Z][^0-9]*$/.test(value)
            ? "Veuillez entrer un nom valide."
            : "";
        break;
      default:
        break;
    }
    setErrors(formErrors);
    setFormIsValid(Object.values(formErrors).every((err) => err === ""));
  };

  function handleLogin() {
    navigate("/login");
  }
  return (
    <div className="flex flex-col text-sm md:text-md w-[80vw] md:w-[30vw]  gap-8">
      <h2 className="text-2xl md:text-4xl font-Natasha">S'inscrire</h2>
      <p className="text-[#515151]">Inscrivez-vous à votre compte ci-dessous</p>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex justify-between  gap-5 sm:gap-7">
          <div className="flex flex-col w-1/2 gap-2 ">
            <label className="">Prenom</label>
            <input
              className=" rounded-md text-black  bg-[#F2F3F6] w-full p-3 md:p-4"
              type="text"
              onChange={handleChange}
              name="firstName"
            />
          </div>
          <div className="flex flex-col w-1/2 gap-2">
            <label className="">Nom</label>
            <input
              className="rounded-md text-black bg-[#F2F3F6] w-full  p-3 md:p-4"
              type="text"
              onChange={handleChange}
              name="lastName"
            />
          </div>
        </div>
        {isSubmitting && errors.lastName && (
          <div className="text-Rose100">{errors.lastName}</div>
        )}
        {isSubmitting && errors.firstName && (
          <div className="text-Rose100">{errors.firstName}</div>
        )}
        <label>Email</label>
        <input
          className="rounded-md text-black  bg-[#F2F3F6] p-3 md:p-4"
          type="text"
          onChange={handleChange}
          name="email"
        />
        {isSubmitting && errors.email && (
          <div className="text-Rose100">{errors.email}</div>
        )}
        <label>Mot de passe</label>
        <input
          className="rounded-md text-black  bg-[#F2F3F6] p-3 md:p-4"
          type="password"
          onChange={handleChange}
          name="password"
        />
        {isSubmitting && errors.password && (
          <div className="text-Rose100">{errors.password}</div>
        )}
        <button className="rounded-md text-white font-bold bg-[#8D92C9] p-3 md:p-4">
          Se connecter
        </button>
      </form>
      <button className="flex justify-center items-center gap-4 rounded-md bg-[#F2F3F6] p-3 md:p-4">
        <img src="devicon_google.svg" alt="" />
        Connexion avec Google
      </button>
      <p className="self-center">
        Avez vous deja un compte?{" "}
        <span className="cursor-pointer text-Blue66" onClick={handleLogin}>
          Se connecter
        </span>
      </p>
    </div>
  );
}

export default RegisterForm;
