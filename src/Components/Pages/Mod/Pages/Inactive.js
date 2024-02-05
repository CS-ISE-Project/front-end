import React from "react";

export default function Inactive() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-center items-center gap-16">
      <img alt="inactive" className="w-[25vw]" src="/disabled.png" />
      <h1 className="text-[2rem] text-[#535353]">
        Your account is deactivated!
      </h1>
    </div>
  );
}
