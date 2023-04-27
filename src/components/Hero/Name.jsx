import ShuffleText from "react-shuffle-text";
import "./para.css";
import Quote from "./Quote";
export default function Name() {
  return (
    // sm:text-[38px]
    <div className="text-[6rem] uppercase font-bold v:text-[34px] v:font-[500] sm:text-[5rem] 
    lg:text-[5rem] lg:font-medium md:text-[3.7rem] md:font-semibold
     2xl:text-[6rem] 2xl:font-[600]">
      <span className="Name flex sm:flex-col v:flex-row
       lg:flex-row md:flex-row 2xl:flex-row xl:flex-row ">
        <ShuffleText content="Siddhant"></ShuffleText>
        <ShuffleText content=" Panwar"></ShuffleText>
      </span>
      <span className="flex justify-center">
        <Quote />
      </span>
    </div>
  );
}
