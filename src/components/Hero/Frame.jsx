import React from "react";
import { HeroImg } from "../../assets";
function Frame() {
  return (
    <div className="lg:ml-[3.5rem] md:ml-[0rem] sm:ml-[0rem] v:ml-[0]">
      <div className=" flex justify-center items-center
      v:w-[42vh] v:h-[42vh] v:mt-[1rem] 
      sm:w-[55vh] sm:h-[55vh] sm:mt-[2rem]
      md:w-[55vh] md:h-[55vh] md:mt-[0rem]
      lg:w-[55vh] lg:h-[55vh] lg:mt-[0rem]
      xl:w-[55vh] xl:h-[55vh] xl:mt-[2rem]
      2xl:w-[56vh] 2xl:h-[56vh] 2xl:mt-[3rem]
      ">
        <img
          src={HeroImg}
          alt="profile"
          // sm:w-[25rem] sm:h-[25rem]
          className="
           border-[5px]
          rounded-[100%]
          opacity-[85%] 
          v:w-[100%] v:h-[100%] v:border-[3px] 
          sm:w-[100%] sm:h-[100%] 
          md:w-[100%] md:h-[100%]
          lg:w-[100%] lg:h-[100%]
          xl:w-[100%] xl:h-[100%] 
          2xl:w-[100%] 2xl:h-[100%]
          "
        />
      </div>
    </div>
  );
}

export default Frame;
