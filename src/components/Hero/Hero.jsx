import React from "react";
import HeroLoader from "./HeroLoader";
import Name from "./Name.jsx";
import Frame from "./Frame";
import Quote from "./Quote";

const Hero = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] ">
      <div
        className="flex justify-center items-center 
       w-[100vw]v
       h-[35vh]
       v:mt-[2rem] v:flex-col v:gap-[2rem] v:h-[40vh]  
       sm:mt-[2rem] sm:flex-col sm:gap-[2rem] sm:h-[30vh]  
       md:mt-[2rem] md:flex-col md:gap-[2rem] md:h-[30vh]  
       lg:mt-[0rem] lg:flex-col lg:gap-[2rem] lg:h-[35vh] 
       xl:mt-[0rem] xl:flex-col xl:gap-[2rem] 
       2xl:mt-[1rem] 2xl:flex-col 2xl:gap-[2rem]
       "
      >
        <HeroLoader />
          <Name />
      </div>
      <div
        className="flex justify-center items-center h-[60vh]
        w-[100vw]
        xl:h-[70vh] 
        sm:h-[70%] sm:items-start
        md:h-[70%] md:items-start
        lg:h-[100%]
        v:h-[100%] v:items-start
      "
      >
        <Frame />
      </div>
    </div>
  );
};

export default Hero;
