import React from "react";
import { HeroImg } from "../../assets";
function Frame() {
  return (
    <div>
      <div className="v:pt-[0rem] sm:pt-[0rem] p-[1rem]">
        <img
          src={HeroImg}
          alt="profile"
          // sm:w-[25rem] sm:h-[25rem]
          className="
          border-l-[10px]
          border-b-[10px]
          border-t-[10px] 
          border-r-[10px] 
          border-t-[#7950F2] 
          border-b-[#7950F2] 
          border-l-[#7950F2] 
          border-r-[#7950F2] 
          opacity-[85%] 
          v:border-[3px] v:w-[19rem] v:h-[19rem]  
          sm:w-[25rem] sm:h-[25rem] 
          md:w-[29rem] md:h-[29em]
          xl:w-[27rem] xl:h-[27rem]
          lg:w-[28rem] lg:h-[28rem]
          2xl:w-[29rem] 2xl:h-[29rem]"
        />
      </div>
    </div>
  );
}

export default Frame;
