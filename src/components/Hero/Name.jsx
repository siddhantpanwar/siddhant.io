import ShuffleText from "react-shuffle-text";
import "./Name.css";
import Quote from "./Quote";
export default function Name() {
  return (
    // sm:text-[38px]
    <div className=" text-[6rem] uppercase font-bold v:text-[32px] 
     sm:text-[4rem] 
    lg:text-[5rem] lg:font-medium md:text-[4rem] md:font-semibold
     2xl:text-[8rem] 2xl:font-[600] md:w-[90vw] v:font-[600]">
      <span className="Name flex sm:flex-col v:flex-row md:justify-center
       lg:flex-row md:flex-row 2xl:flex-row xl:flex-row ]">
        <ShuffleText content="Siddhant"></ShuffleText>
        <ShuffleText content=" Panwar"></ShuffleText>
      </span>
      <span className="flex justify-center mt-[1rem]">
        <Quote />
      </span>
    </div>
  );
}
