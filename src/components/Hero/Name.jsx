import ShuffleText from "react-shuffle-text";
import "./Name.css";
import Quote from "./Quote";
export default function Name() {
  return (
    // sm:text-[38px]
    <div className=" text-[6rem] uppercase font-bold 
    v:text-[3rem]
    sm:text-[4rem] 
    md:text-[4rem] md:font-semibold md:w-[90vw]
    lg:text-[5rem] lg:font-medium 
    2xl:text-[8rem] 2xl:font-[600] 
     ">
      <span className="Name flex 
      v:flex-col v:items-center v:h-[6.5rem] v:font-bold
      sm:flex-col 
      md:justify-center md:flex-row 
      lg:flex-row
      2xl:flex-row xl:flex-row ">
        <ShuffleText content="Siddhant"></ShuffleText>
        <ShuffleText content="Panwar"></ShuffleText>
      </span>
      <span className="flex justify-center mt-[1.5rem]">
        <Quote />
      </span>
    </div>
  );
}
