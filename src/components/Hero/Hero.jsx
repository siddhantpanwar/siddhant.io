import React from "react";
import HeroLoader from "./HeroLoader";
import Name from "./Name.jsx";
import Frame from "./Frame";
import Quote from "./Quote";

const Hero = () => {

  return (
    <div className="flex flex-col">
      <div className="flex justify-center 
      v:mr-[0] v:mt-[2rem]
       sm:mr-[0] sm:mt-[0rem] 
       md:mr-[0] md:mt-[0rem] 
       xl:mt-[-3rem]">
       <HeroLoader/>
      </div>
      <div className="flex justify-center mt-[3rem] 
      v:mt-[1rem] v:mr-[0]  
      sm:mt-[2rem] sm:mr-[0]  
      md:mt-[2rem] md:mr-[0] 
      xl:mt-[1rem] 
      2xl:mt-[2.5rem]">
        <Name/>
      </div>
      <div className="flex justify-center mt-[1rem] 
      v:mr-[0] v:mt-[0rem]
      sm:mr-[0]">
        <Frame/>
      </div>
    </div>
  )
};

export default Hero;
