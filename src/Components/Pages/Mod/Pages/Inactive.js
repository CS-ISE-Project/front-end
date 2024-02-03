import React from "react";

export default function Inactive() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-center items-center">
      <img alt="inactive" className="w-[25vw]" src="/disabled.png" />
      <h1 className="text-[2rem]">
        Your account is deactivated, Try again later
      </h1>
    </div>
  );
}
