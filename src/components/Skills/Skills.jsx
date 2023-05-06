import React from "react";
import "./Skills.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Skills() {
  const percentage = 26;
  // flex flex-col justify-between items-center
  return (
    <div
      className="flex flex-col justify-between md:justify-center v:justify-around
        2xl:justify-center border-[2px]
       2xl:h-[100vh]
     xl:justify-evenly items-center sm:w-[100vw] xl:h-[100vh] xl:w-[80vw] xl:ml-[5rem]
      sm:h-[100vh] v:w-[100vw] v:h-[200vh] md:h-[100vh] md:w-[100vw] md:ml-[0rem]"
    >
      <div
        className="flex sm:flex-col md:flex-col v:flex-col w-[79vw]
       h-[45vh] v:h-[95vh] v:w-[97vw] lg:h-[40vh] 2xl:h-[50vh] xl:h-[30vh] 
       justify-center items-center v:justify-start"
      >
        <div
          className="flex w-[40vw] v:w-[90vw] md:h-[25vh] md:mt-[0rem] md:w-[99vw]
        v:h-[40vh] sm:w-[99vw] 2xl:h-[20vw] sm:h-[25vh] sm:mt-[2rem] 
              h-[35vh] lg:mr-[10px]"
        >
          <div
            className="flex flex-col w-[40vw] v:w-[99vw] 
          sm:w-[99vw] sm:justify-center sm:items-center
          md:w-[99vw] md:justify-center md:items-center
          lg:pl-[2rem]
           v:justify-center v:items-center  
           "
          >
            <div
              className="flex sm:justify-center sm:items-center md:justify-center md:items-center
               v:justify-center
               v:items-center  v:mt-[0]
             uppercase h-[10vh] sm:h-[12vh] md:h-[12vh] justify-start 2xl:mt-[0rem]
               mt-[2rem] sm:mt-[0]
             xl:mt-[1.5rem] lg:mt-[1.5rem]  sm:w-[98vw]  2xl:h-[12vh]"
            >
              <h1
                className="text-[8rem] xl:text-[6rem] lg:text-[5rem]
               sm:text-[6rem] v:text-[4rem] font-medium md:text-[6rem]"
              >
                *Skills*
              </h1>
            </div>
            <div
              className="flex 2xl:w-[30vw] sm:w-[85vw] v:mt-[1rem] 
               v:w-[88vw] sm:items-center mt-[7rem] xl:mt-[2.5rem] 
            lg:mt-[1.5rem] lg:w-[36vw] sm:mt-[1rem] xl:w-[36vw] md:w-[85vw]
             md:mt-[1rem] md:items-center"
            >
              <span
                className="text-left text-[16px] opacity-[60%] text-[white] 
               font-[400] tracking-[0.3px] leading-[25px] sm:text-center md:text-center
                v:text-center"
              >
                Welcome to my skill page! Here you'll find a brief overview of
                my expertise. With my strong commitment to excellence and
                extensive experience, I bring a unique set of skills to the
                table. Let's collaborate to turn your vision into reality.
              </span>
            </div>
          </div>
        </div>

        <div
          class="2xl:w-[30vw] 2xl:gap-[5rem] sm:w-[90vw] sm:h-[15vh] sm:mt-[1rem]
          md:w-[90vw] md:h-[15vh] md:mt-[1rem] v:items-center
           v:w-[70vw] v:h-[50vh] v:mt-[1rem]  md:justify-items-center md:items-center 
           md:grid-cols-6 md:gap-[0px] 
         sm:justify-items-center v:justify-items-center items-start grid grid-cols-3 
          sm:grid-cols-6 v:grid-cols-2 sm:gap-[0px] v:gap-[20px]
         gap-[20px] lg:gap-[30px] lg:w-[32vw]"
        >
          <div className="border-[0px] 2xl:w-[8vw]  xl:w-[8.5vw] lg:w-[9vw] md:w-[10vw]
           sm:w-[6rem] v:w-[6rem]">
            {" "}
            <CircularProgressbar
              value={95}
              styles={{
                text: {
                  fontSize: "15px",
                  fill: "#ffff",
                  trailColor: "#d6d6d6",
                },
                trail:{
                  stroke:"#43393986"
                },
                path:{
                  stroke:"#7950F2",
                  // strokeLinecap: '',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
              }}
              className="uppercase font-medium"
              text={"html"}
            />
          </div>
          <div className="border-[0px] 2xl:w-[8vw] xl:w-[8.5vw] lg:w-[9vw] md:w-[10vw]
           sm:w-[6rem] v:w-[6rem]">
            {" "}
            <CircularProgressbar
              value={95}
              styles={{
                text: {
                  fontSize: "15px",
                  fill: "#ffff",
                  trailColor: "#d6d6d6",
                },
                trail:{
                  stroke:"#43393986"
                },
                path:{
                  stroke:"#7950F2",
                  // strokeLinecap: '',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
              }}
              className="uppercase font-medium"
              text={"css"}
            />
          </div>
          <div className="border-[0px] 2xl:w-[8vw] xl:w-[8.5vw] lg:w-[9vw] md:w-[10vw]
           sm:w-[6rem] v:w-[6rem]">
            {" "}
            <CircularProgressbar
              value={70}
              styles={{
                text: {
                  fontSize: "15px",
                  fill: "#ffff",
                  trailColor: "#d6d6d6",
                },
                trail:{
                  stroke:"#43393986"
                },
                path:{
                  stroke:"#7950F2",
                  // strokeLinecap: '',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
              }}
              className="uppercase font-medium"
              text={"js"}
            />
          </div>
          <div className="border-[0px] 2xl:w-[8vw] xl:w-[8.5vw] lg:w-[9vw] md:w-[10vw]
           sm:w-[6rem] v:w-[6rem]">
            {" "}
            <CircularProgressbar
              value={75}
              styles={{
                text: {
                  fontSize: "15px",
                  fill: "#ffff",
                  trailColor: "#d6d6d6",
                },
                trail:{
                  stroke:"#43393986"
                },
                path:{
                  stroke:"#7950F2",
                  // strokeLinecap: '',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
              }}
              className="uppercase font-medium"
              text={"react"}
            />
          </div>
          <div className="border-[0px] 2xl:w-[8vw] xl:w-[8.5vw] lg:w-[9vw] md:w-[10vw] 
          sm:w-[6rem] v:w-[6rem]">
            {" "}
            <CircularProgressbar
              value={39}
              styles={{
                text: {
                  fontSize: "15px",
                  fill: "#ffff",
                  trailColor: "#d6d6d6",
                },
                trail:{
                  stroke:"#43393986"
                },
                path:{
                  stroke:"#7950F2",
                  // strokeLinecap: '',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
              }}
              className="uppercase font-medium"
              text={"native"}
            />
          </div>
          <div className="border-[0px] 2xl:w-[8vw] xl:w-[8.5vw] lg:w-[9vw] md:w-[10vw]
           sm:w-[6rem] v:w-[6rem]">
            {" "}
            <CircularProgressbar
              value={80}
              styles={{
                text: {
                  fontSize: "15px",
                  fill: "#ffff",
                  trailColor: "#d6d6d6",
                },
                trail:{
                  stroke:"#43393986"
                },
                path:{
                  stroke:"#7950F2",
                  // strokeLinecap: '',
                  // Customize transition animation
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
              }}
              className="uppercase font-medium"
              text={"python"}
            />
          </div>
        </div>
      </div>
      <div
        className="flex w-[79vw] h-[35vh] v:w-[97vw] 2xl:h-[40vh] v:h-[100vh]  lg:h-[49vh]
        v:justify-start 2xl:mt-[0rem] xl:h-[20vh] md:w-[98vw] md:mt-[-3rem] md:h-[60vh] 
        sm:w-[98vw] sm:mt-[-3rem] sm:h-[60vh] flex-col items-center justify-center v:mt-[0rem]"
      >
        <div
          className="w-[79vw] h-[10vh] v:w-[100vw]
         flex justify-center items-center sm:h-[4vh] md:h-[4vh]"
        >
          <h1
            className="text-[5rem] xl:text-[3.5rem] lg:text-[4rem] 
           sm:text-[3.5rem] sm:mt-[0] font-medium uppercase v:text-[2rem] 
           v:mt-[0rem] 2xl:mt-[0rem] md:text-[3.5rem] md:mt-[0] "
          >
            ❄️Soft skills❄️
          </h1>
        </div>

        <div
          class="grid grid-cols-4 sm:h-[40vh] md:h-[45vh] v:h-[100vh] v:pt-[0rem] v:mt-[0rem] 
           v:grid-cols-1 2xl:h-[25vh]  xl:h-[20vh]  
          sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:mt-[1rem] gap-[2rem] v:gap-[0rem]
         lg:gap-[1rem] items-center w-[75vw] h-[20vh] pt-[3rem] sm:mt-[2.2rem] md:mt-[0rem]
          sm:pt-[0] xl:pt-[0] lg:pt-[0] v:items-start"
        >
          {/* <CircularProgressbar value={percentage} text={"HTML"} /> */}

          <div>
            <div class="relative pt-1">
              <div
                class="w-[100%] overflow-hidden items-center h-[4rem] flex rounded-full
               border-[0] bg-black shadow-[0_0_1.5rem_inset_] shadow-[#7950F2]"
              >
                <div
                  class="ss1 flex flex-col h-[4rem] text-center border-[0]
                   justify-center
                   w-[50%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[#7950f2]"
                >
                  <span
                    className="text-[white] xl:text-[15px] lg:text-[14px]
                   capitalize font-medium"
                  >
                    visual design
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[#FF66C4]"
              >
                <div
                  class="ss2 flex flex-col h-[4rem] text-center border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[#FF66C4]"
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px] capitalize font-medium">
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[#FF914D]"
              >
                <div
                  class="ss3 flex flex-col h-[4rem] text-center border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[#FF914D]"
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px] capitalize font-medium">
                    Ui | ux
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[cyan]"
              >
                <div
                  class="ss4 flex flex-col h-[4rem] text-center border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[cyan]"
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px] capitalize font-medium">
                    adobe xd
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[#7950f2]"
              >
                <div
                  class="ss5 flex flex-col h-[4rem] text-center border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[#7950f2]"
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px] capitalize font-medium">
                    Wordpress
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[#FF66C4]"
              >
                <div
                  class="ss6 flex flex-col h-[4rem] text-center border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[#FF66C4]"
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px] capitalize font-medium ">
                    Webflow
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[#FF914D]"
              >
                <div
                  class="ss7 flex flex-col h-[4rem] text-center border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[#FF914D]"
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px] capitalize font-medium ">
                    3d design
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[cyan]"
              >
                <div
                  class="ss8 flex flex-col h-[4rem] text-center border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[cyan]"
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px] capitalize font-medium">
                    Web Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
