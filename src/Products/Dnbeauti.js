import React from "react";
import Cards from "../Cards";
import dnbdata from "../Data/DNbData";

const Dnbeauti = () => {
  return (
    <>
      <div className="p-4 flex justify-left ml-24">
        <h1 className="text-yellow-300 text-3xl">Day Night Beauty</h1>
      </div>
      <div className="p-4 flex gap-4 justify-center flex-wrap ">
        {dnbdata.map((prod) => {
          return <Cards img={prod.img} name={prod.name} link={prod.link}/>;
        })}
      </div>
    </>
  );
};

export default Dnbeauti;
