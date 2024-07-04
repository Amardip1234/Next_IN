import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <img className="h-20" src="/logo.png" alt="" />
        </div>
        <div className="text-white flex gap-3 pr-3">
          <button className="font-bold bg-slate-900 p-2 rounded-3xl">Courses</button>
          <button className="bg-blue-400 h-10 pl-3 font-semiboldbold pr-3 rounded-3xl ">About</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
