import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EndpointRoot } from "../../../App";

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
    if (props.type === "/UserRegister" || props.type === "/userRegister") {
      endpoint = `${EndpointRoot}/auth/signup`;
    } else if (
      props.type ===
        "/ff46f256af3658afb8e2ccdf0c81c934fe0d1c3b09783a0e60fc166ef391f68f" ||
      props.type ===
        "/Ff46f256af3658afb8e2ccdf0c81c934fe0d1c3b09783a0e60fc166ef391f68f"
    ) {
      endpoint = `${EndpointRoot}/auth/mod/signup`;
    } else if (
      props.type ===
        "/aa9922472061e207324dfec5df3a0925c634fdf43d243ca4b7874b98bc4c8df0" ||
      props.type ===
        "/Aa9922472061e207324dfec5df3a0925c634fdf43d243ca4b7874b98bc4c8df0"
    ) {
      endpoint = `${EndpointRoot}/auth/admin/signup`;
    }
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      const accessToken = data.access_token;
      localStorage.setItem("accessToken", accessToken);

      if (props.type === "/UserRegister" || props.type === "/userRegister") {
        if (response.status === 200) {
          alert("user created successfully");
          navigate("/UserLogin");
        }
      }

      if (
        props.type ===
          "/ff46f256af3658afb8e2ccdf0c81c934fe0d1c3b09783a0e60fc166ef391f68f" ||
        props.type ===
          "/Ff46f256af3658afb8e2ccdf0c81c934fe0d1c3b09783a0e60fc166ef391f68f"
      ) {
        if (response.status === 200) {
          alert("mod created successfully");
          navigate(
            "/b7e43cb8e8c5ee46dc353d35b26135993f8bdc5caf58246f30c9f6c30d625217"
          );
        }
      }

      if (
        props.type ===
          "/aa9922472061e207324dfec5df3a0925c634fdf43d243ca4b7874b98bc4c8df0" ||
        props.type ===
          "/Aa9922472061e207324dfec5df3a0925c634fdf43d243ca4b7874b98bc4c8df0"
      ) {
        if (response.status === 200) {
          alert("Admin created successfully");
          navigate(
            "/8b2790f4436aa223df987b6e32d68c3f97c521e943669219f042dadd1cf55f3f"
          );
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
            ? "Please enter a valid email"
            : "";
        break;
      case "password":
        formErrors.password =
          !value || value.length < 6 ? "Please enter a valid password." : "";
        break;

      case "first_name":
        formErrors.first_name =
          !value || value.length < 2 ? "Please enter a valid first name ." : "";
        break;
      case "last_name":
        formErrors.last_name =
          !value || !/^[A-Za-z][^0-9]*$/.test(value)
            ? "Please enter a valid last name ."
            : "";
        break;
      default:
        break;
    }
    setErrors(formErrors);
    setFormIsValid(Object.values(formErrors).every((err) => err === ""));
  };

  function navigateLogin() {
    if (props.type === "/UserRegister" || props.type === "/userRegister") {
      navigate("/UserLogin");
    } else if (
      props.type ===
        "/aa9922472061e207324dfec5df3a0925c634fdf43d243ca4b7874b98bc4c8df0" ||
      props.type ===
        "/Aa9922472061e207324dfec5df3a0925c634fdf43d243ca4b7874b98bc4c8df0"
    ) {
      navigate(
        "/b7e43cb8e8c5ee46dc353d35b26135993f8bdc5caf58246f30c9f6c30d625217"
      );
    } else if (
      props.type ===
        "/aa9922472061e207324dfec5df3a0925c634fdf43d243ca4b7874b98bc4c8df0" ||
      props.type ===
        "/Aa9922472061e207324dfec5df3a0925c634fdf43d243ca4b7874b98bc4c8df0"
    ) {
      navigate(
        "/8b2790f4436aa223df987b6e32d68c3f97c521e943669219f042dadd1cf55f3f"
      );
    }
  }
  return (
    <div className="flex flex-col text-sm md:text-md w-[80vw] md:w-[30vw]  gap-8 text-Typo">
      <h2 className=" text-2xl md:text-4xl lg:text-6xl font-Natasha">
        Register
      </h2>
      <p className="text-[#515151]">Register for your account below.</p>
      <form
        className="flex flex-col gap-[16px] md:gap-[26px]"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between  gap-5 sm:gap-7">
          <div className="flex flex-col w-1/2 gap-2 ">
            <label className="text-[1.4rem]">First Name</label>
            <input
              className=" rounded-md text-black  bg-[#F2F3F6] w-full p-3 md:p-4"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="first_name"
            />
          </div>
          <div className="flex flex-col w-1/2 gap-2">
            <label className="text-[1.4rem]">Last Name</label>
            <input
              className="rounded-md text-black bg-[#F2F3F6] w-full  p-3 md:p-4"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="last_name"
            />
          </div>
        </div>
        {isSubmitting && errors.last_name && (
          <div className="text-Rose100">{errors.last_name}</div>
        )}
        {isSubmitting && errors.first_name && (
          <div className="text-Rose100">{errors.first_name}</div>
        )}
        <label className="text-[1.4rem]">Email</label>
        <input
          className="rounded-md text-black  bg-[#F2F3F6] p-3 md:p-4"
          type="text"
          onChange={handleChange}
          placeholder="Email Adress"
          name="email"
        />
        {isSubmitting && errors.email && (
          <div className="text-Rose100">{errors.email}</div>
        )}
        <label className="text-[1.4rem]">Password</label>
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
        <button
          className="flex items-center justify-center w-full rounded-md text-white font-bold bg-[#8D92C9] p-3 md:p-4 text-[1.4rem]"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
      {/* <button className="flex justify-center items-center gap-4 rounded-md bg-[#F2F3F6] p-3 md:p-4">
        <img src="devicon_google.svg" alt="google" />
        Login with Google
      </button> */}
      <p className="self-center text-[1.2rem]">
        Do you already have an account?{" "}
        <span className="cursor-pointer text-Blue66" onClick={navigateLogin}>
          Login
        </span>
      </p>
    </div>
  );
}

export default RegisterForm;
