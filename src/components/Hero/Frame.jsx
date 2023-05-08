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
           border-[5px]
          rounded-[100%]
          opacity-[85%] 
          v:border-[3px] v:w-[19rem] v:h-[19rem] v:mt-[2rem] 2xl:mt-[1rem]
          sm:w-[25rem] sm:h-[25rem] 
          md:w-[24rem] md:h-[24rem]
          xl:w-[26rem] xl:h-[26rem]
          lg:w-[28rem] lg:h-[28rem]
          2xl:w-[33rem] 2xl:h-[33rem]"
        />
      </div>
      {/* // border-l-[5px]
          // border-b-[5px]
          // border-t-[5px] 
          // border-r-[5px] 
          // border-t-[#7950F2] 
          // border-b-[#7950F2] 
          // border-l-[#7950F2] 
          // border-r-[#7950F2]  */}
    </div>
  );
}

export default Frame;
