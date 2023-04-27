import React from "react";
import { logo } from "../../assets";
import "./Preloader.css";
function Preloader() {
  return (
    <div className="flex-row overflow-hidden">
      <div className="flex justify-center w-[100vw] h-[100vh] ">
        <img
          src={logo}
          className="v:w-[4rem] sm:w-[8rem] md:w-[7rem] 
          lg:w-[9.2rem] xl:w-[10rem] 2xl:w-[14rem] animate-spin 
           scroll-hidden"
        />
        <svg className="v:text-[45px] sm:text-[4.7rem] md:text-[5.5rem] 
        lg:text-[6.9rem] xl:text-[8.2rem] 2xl:text-[10.2rem]  
        v:w-[78vw] sm:w-[75vw] md:w-[72vw] lg:w-[67vw] xl:w-[63vw] 2xl:w-[65vw]">
          <text className="" x="50%" y="50%" dy=".31em" textAnchor="middle">
            SIDDHANT.IO
          </text>
        </svg>
      </div>
    </div>
  );
}
// 
export default Preloader;
