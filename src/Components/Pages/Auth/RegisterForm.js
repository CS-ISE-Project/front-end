import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterForm(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
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

  const signUp = async () => {
    let endpoint;
    if (props.type === "/UserRegister") {
      endpoint = `https://ise-project-api-production.up.railway.app/auth/signup`;
    } else if (props.type === "/ModRegister") {
      endpoint = `https://ise-project-api-production.up.railway.app/auth/mod/signup`;
    } else if (props.type === "/AdminRegister") {
      endpoint = `https://ise-project-api-production.up.railway.app/auth/admin/signup`;
    }
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = response.json();
      console.log(data);
      const accessToken = data.access_token;
      localStorage.setItem('accessToken', accessToken);
      if (props.type === "/UserRegister") {
        if (response.status === 200) {
          navigate("/user");
        }
      } else if (props.type === "/ModRegister") {
        if (response.status === 200) {
          navigate("/mod");
        }
      } else if (props.type === "/AdminRegister") {
        if (response.status === 200) {
          navigate("/admin");
        }
      }
    } catch (e) {
      console.error("error :", e);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    if (formIsValid) {
      signUp();
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

      case "first_name":
        formErrors.first_name =
          !value || value.length < 4 ? "Veuillez entrer un prénom valide." : "";
        break;
      case "last_name":
        formErrors.last_name =
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

  function navigateLogin() {
    if (props.type === "/UserRegister") {
      navigate("/UserLogin");
    } else if (props.type === "/ModRegister") {
      navigate("/ModLogin");
    } else if (props.type === "/AdminRegister") {
      navigate("/AdminLogin");
    }
  }
  return (
    <div className="flex flex-col text-sm md:text-md w-[80vw] md:w-[30vw]  gap-8 text-Typo">
      <h2 className=" text-2xl md:text-4xl lg:text-6xl font-Natasha">
        S'inscrire
      </h2>
      <p className="text-[#515151]">Inscrivez-vous à votre compte ci-dessous</p>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex justify-between  gap-5 sm:gap-7">
          <div className="flex flex-col w-1/2 gap-2 ">
            <label className="">Prenom</label>
            <input
              className=" rounded-md text-black  bg-[#F2F3F6] w-full p-3 md:p-4"
              type="text"
              placeholder="Prénom"
              onChange={handleChange}
              name="firstName"
            />
          </div>
          <div className="flex flex-col w-1/2 gap-2">
            <label className="">Nom</label>
            <input
              className="rounded-md text-black bg-[#F2F3F6] w-full  p-3 md:p-4"
              type="text"
              placeholder="Nom"
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
          placeholder="Mail Adress"
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
          placeholder="Password"
          name="password"
        />
        {isSubmitting && errors.password && (
          <div className="text-Rose100">{errors.password}</div>
        )}
        <Link
          className="flex items-center justify-center w-full rounded-md text-white font-bold bg-[#8D92C9] p-3 md:p-4"
          to="/user"
        >
          Se connecter
        </Link>
      </form>
      <button className="flex justify-center items-center gap-4 rounded-md bg-[#F2F3F6] p-3 md:p-4">
        <img src="devicon_google.svg" alt="google" />
        Connexion avec Google
      </button>
      <p className="self-center">
        Avez vous deja un compte?{" "}
        <span className="cursor-pointer text-Blue66" onClick={navigateLogin}>
          Se connecter
        </span>
      </p>
    </div>
  );
}

export default RegisterForm;
