import ShuffleText from "react-shuffle-text";
import "./Name.css";
import Quote from "./Quote";
export default function Name() {
  return (
    // sm:text-[38px]
    <div className=" text-[6rem] uppercase font-bold  
    v:text-[3rem] 
    sm:text-[4rem] sm:font-semibold sm:w-[90vw] sm:ml-[0rem]
    md:text-[4rem] md:font-semibold md:w-[90vw] md:ml-[0rem]
    lg:text-[5rem] lg:font-medium lg:ml-[3.5rem]
    xl:text-[5.5rem] xl:font-[600] 
    2xl:text-[8rem] 2xl:font-[600] 
     ">
      <span className="Name flex 
      v:flex-col v:items-center v:h-[6.5rem] v:font-bold
      sm:flex-col sm:items-center sm:tracking-[4px] sm:gap-[0rem] sm:h-[8rem] 
      md:justify-center md:flex-row  md:gap-[1rem] md:tracking-[3px]
      lg:flex-row
      xl:flex-row xl:tracking-[2px] xl:gap-[1.1rem]
      2xl:flex-row 2xl:tracking-[6px] 2xl:gap-[1.4rem]
      ">
        <ShuffleText content="Siddhant"></ShuffleText>
        <ShuffleText content="Panwar"></ShuffleText>
      </span>
      <span className="flex justify-center mt-[1.5rem] 
      2xl:mt-[0]
      lg:mt-[0]
      md:mt-[0rem]
      xl:mt-[0rem]
      ">
        <Quote />
      </span>
    </div>
  );
}
