import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  var navigate = useNavigate()
  const change=()=>{
      navigate('/shorts')
  }
  return (
    <>
      <div className="flex  items-center">s
        <div>
          <img className="h-20  " src="/logo.png" alt="" />
        </div>
        <div className="w-full"><input type="text" className="w-1/3 h-10 rounded-xl pl-3 bg-black border-1 border-yellow-400"  placeholder="Search Items" /></div>
        <div className="text-white flex gap-3 pr-3">
          <button className="font-bold bg-slate-900 p-2 rounded-3xl">Products</button>
          <button className="bg-blue-400 h-10 pl-3 font-semiboldbold pr-3 rounded-3xl " onClick={change}>Cart</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
