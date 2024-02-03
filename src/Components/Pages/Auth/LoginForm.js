import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../App";

function LoginForm(props) {
  const [auth, setAuth] = useContext(Context);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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

  function parseJwt(token) {
    var base64Url = token?.split(".")[1];
    var base64 = base64Url?.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  const login = async () => {
    let endpoint;
    if (props.type === "/UserLogin") {
      endpoint = `https://ise-project-api-production.up.railway.app/auth/login?email=${formData.email}&password=${formData.password}`;
    } else if (props.type === "/modLogin" || props.type === "/ModLogin") {
      endpoint = `https://ise-project-api-production.up.railway.app/auth/mod/login?email=${formData.email}&password=${formData.password}`;
    } else if (props.type === "/AdminLogin") {
      endpoint = `https://ise-project-api-production.up.railway.app/auth/admin/login?email=${formData.email}&password=${formData.password}`;
    }
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      window.localStorage.setItem("token", data.access_token);
      const decodedToken = parseJwt(data.access_token);
      window.localStorage.setItem("username", decodedToken.sub);
      window.localStorage.setItem("userid", decodedToken.id);
      window.localStorage.setItem("auth", auth);

      if (props.type === "/UserLogin") {
        if (response.status === 200) {
          setAuth((prev) => ({
            ...prev,
            isUser: 1,
          }));

          navigate("/user");
        }
      } else if (props.type === "/modLogin" || props.type === "/ModLogin") {
        if (response.status === 200) {
          setAuth((prev) => ({
            ...prev,
            isMod: 1,
          }));
          try {
            const mod = await fetch(
              `https://ise-project-api-production.up.railway.app/moderators/${decodedToken.id}`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            const modResult = await mod.json();
            if (modResult.is_active === true) {
              setAuth((prev) => ({
                ...prev,
                isMod: 1,
              }));
              navigate("/mod");
            } else {
              navigate("/inactive");
            }
          } catch (e) {
            console.log(e);
          }
        }
      } else if (props.type === "/AdminLogin") {
        if (response.status === 200) {
          setAuth((prev) => ({
            ...prev,
            isAdmin: 1,
          }));
          navigate("/admin");
        }
      }
    } catch (e) {
      console.error("Login Failed :", e);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    if (formIsValid) {
      login();
    }
  }

  const validateField = (name, value) => {
    let formErrors = { ...errors };
    switch (name) {
      case "email":
        formErrors.email =
          !value || !/\S+@\S+\.\S+/.test(value)
            ? "Please enter a valid email ."
            : "";
        break;
      case "password":
        formErrors.password =
          !value || value.length < 6
            ? "Please enter a valid password ."
            : "";
        break;

      default:
        break;
    }
    setErrors(formErrors);
    setFormIsValid(Object.values(formErrors).every((err) => err === ""));
  };

  function NavigateRegister() {
    if (props.type === "/UserLogin") {
      navigate("/UserRegister");
    } else if (props.type === "/ModLogin") {
      navigate("/ModRegister");
    } else if (props.type === "/AdminLogin") {
      navigate("/AdminRegister");
    }
  }

  return (
    <div className="flex flex-col justify-center items-start w-[80vw] gap-[10px] md:gap-[40px] text-sm md:text-md text-Typo">
      <p className=" text-2xl md:text-4xl lg:text-6xl font-Natasha">
        Login
      </p>
      <p className="text-sm text-Typo">
          Log in to your account below
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex gap-[10px] md:gap-[20px] flex-col items-start w-full"
      >
        <label htmlFor="">Email</label>
        <input
          className="rounded-md w-full text-black p-3 md:p-4 bg-[#F2F3F6]"
          type="text"
          name="email"
          placeholder="Mail Adresse"
          onChange={handleChange}
        />
        {isSubmitting && errors.email && (
          <div className="text-Rose100">{errors.email}</div>
        )}
        <div className="flex justify-between w-full">
          <label htmlFor="" className="">
            Password
          </label>
          <p className="text-Rose100 cursor-pointer">Forgot Password ?</p>
        </div>
        <input
          className="rounded-md w-full text-black p-3 md:p-4 bg-[#F2F3F6]"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {isSubmitting && errors.password && (
          <div className="text-Rose100">{errors.password}</div>
        )}

        <button
          className="flex items-center justify-center w-full rounded-md text-white font-bold bg-[#8D92C9] p-3 md:p-4"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
      <button className="flex justify-center items-center gap-4 rounded-md bg-[#F2F3F6] w-full p-3 md:p-4">
        <img src="devicon_google.svg" alt="google" />
        Login with Google
      </button>
      <p className="self-center">
        Don't you have an account?{" "}
        <span className="cursor-pointer text-Blue66" onClick={NavigateRegister}>
          Register
        </span>
      </p>
    </div>
  );
}

export default LoginForm;
