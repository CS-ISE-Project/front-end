import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context, EndpointRoot } from "../../../App";

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
    if (props.type === "/UserLogin" || props.type === "/userLogin") {
      endpoint = `${EndpointRoot}/auth/login?email=${formData.email}&password=${formData.password}`;
    } else if (
      props.type ===
        "/b7e43cb8e8c5ee46dc353d35b26135993f8bdc5caf58246f30c9f6c30d625217" ||
      props.type ===
        "/B7e43cb8e8c5ee46dc353d35b26135993f8bdc5caf58246f30c9f6c30d625217"
    ) {
      endpoint = `${EndpointRoot}/auth/mod/login?email=${formData.email}&password=${formData.password}`;
    } else if (
      props.type ===
      "/8b2790f4436aa223df987b6e32d68c3f97c521e943669219f042dadd1cf55f3f"
    ) {
      endpoint = `${EndpointRoot}/auth/admin/login?email=${formData.email}&password=${formData.password}`;
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

      if (props.type === "/UserLogin" || props.type === "/userLogin") {
        if (response.status === 200) {
          setAuth({ isAdmin: 0, isMod: 0, isUser: 1 });
          alert("Login successful");
          localStorage.setItem(
            "auth",
            JSON.stringify({ isMod: 0, isAdmin: 0, isUser: 1 })
          );
          navigate("/user");
        }
      } else if (
        props.type ===
          "/b7e43cb8e8c5ee46dc353d35b26135993f8bdc5caf58246f30c9f6c30d625217" ||
        props.type ===
          "/B7e43cb8e8c5ee46dc353d35b26135993f8bdc5caf58246f30c9f6c30d625217"
      ) {
        if (response.status === 200) {
          setAuth({ isAdmin: 0, isMod: 1, isUser: 0 });
          alert("Login successful");
          try {
            const mod = await fetch(
              `${EndpointRoot}/moderators/${decodedToken.id}`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            const modResult = await mod.json();
            if (modResult.is_active === true) {
              setAuth({ isAdmin: 0, isMod: 1, isUser: 0 });
              localStorage.setItem(
                "auth",
                JSON.stringify({ isMod: 1, isAdmin: 0, isUser: 0 })
              );
              navigate("/mod");
            } else {
              navigate("/inactive");
            }
          } catch (e) {
            console.log(e);
          }
        }
      } else if (
        props.type ===
        "/8b2790f4436aa223df987b6e32d68c3f97c521e943669219f042dadd1cf55f3f"
      ) {
        if (response.status === 200) {
          setAuth({ isAdmin: 1, isMod: 0, isUser: 0 });
          localStorage.setItem("page", 1);
          alert("Login successful");
          localStorage.setItem(
            "auth",
            JSON.stringify({ isMod: 0, isAdmin: 1, isUser: 0 })
          );
          navigate("/admin");
        }
      }
    } catch (e) {
      alert("Login failed");
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
          !value || value.length < 6 ? "Please enter a valid password ." : "";
        break;

      default:
        break;
    }
    setErrors(formErrors);
    setFormIsValid(Object.values(formErrors).every((err) => err === ""));
  };

  function NavigateRegister() {
    if (props.type === "/UserLogin" || props.type === "/userLogin") {
      navigate("/UserRegister");
    } else if (
      props.type ===
        "/b7e43cb8e8c5ee46dc353d35b26135993f8bdc5caf58246f30c9f6c30d625217" ||
      props.type ===
        "/B7e43cb8e8c5ee46dc353d35b26135993f8bdc5caf58246f30c9f6c30d625217"
    ) {
      navigate(
        "/ff46f256af3658afb8e2ccdf0c81c934fe0d1c3b09783a0e60fc166ef391f68f"
      );
    } else if (
      props.type ===
      "/8b2790f4436aa223df987b6e32d68c3f97c521e943669219f042dadd1cf55f3f"
    ) {
      navigate(
        "/aa9922472061e207324dfec5df3a0925c634fdf43d243ca4b7874b98bc4c8df0"
      );
    }
  }

  return (
    <div className="flex flex-col justify-center items-start w-[80vw] gap-[10px] md:gap-[40px] text-sm md:text-md text-Typo">
      <p className=" text-2xl md:text-4xl lg:text-6xl font-Natasha">Login</p>
      <p className="text-sm text-Typo">Log in to your account below</p>
      <form
        onSubmit={handleSubmit}
        className="flex gap-[16px] md:gap-[26px] flex-col items-start w-full"
      >
        <label className="text-[1.4rem]">Email</label>
        <input
          className="rounded-md w-full text-black p-3 md:p-4 bg-[#F2F3F6] text-[1rem]"
          type="text"
          name="email"
          placeholder="Mail Adresse"
          onChange={handleChange}
        />
        {isSubmitting && errors.email && (
          <div className="text-Rose100">{errors.email}</div>
        )}
        <div className="flex justify-between w-full">
          <label className="text-[1.4rem]">Password</label>
          {/*           <p className="text-Rose100 cursor-pointer">Forgot Password ?</p>
           */}{" "}
        </div>
        <input
          className="rounded-md w-full text-black p-3 md:p-4 bg-[#F2F3F6] text-[1rem]"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {isSubmitting && errors.password && (
          <div className="text-Rose100">{errors.password}</div>
        )}

        <button
          className="flex items-center justify-center w-full rounded-md text-white font-bold bg-[#8D92C9] p-3 md:p-4 text-[1.4rem]"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
      {/* <button className="flex justify-center items-center gap-4 rounded-md bg-[#F2F3F6] w-full p-3 md:p-4">
        <img src="devicon_google.svg" alt="google" />
        Login with Google
      </button> */}
      <p className="self-center text-[1.2rem]">
        Don't you have an account?{" "}
        <span className="cursor-pointer text-Blue66" onClick={NavigateRegister}>
          Register
        </span>
      </p>
    </div>
  );
}

export default LoginForm;
