import React from "react";
import "./Skills.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Skills() {

  return (
    <div
      className="flex flex-col justify-center items-center 
      v:h-[auto] v:w-[100vw]
      sm:w-[100vw] sm:h-[auto] 
      md:justify-center md:h-[auto] md:w-[100vw] md:ml-[0rem]
      lg:h-[auto]
      xl:h-[auto]
      2xl:h-[100vh] 2xl:mt-[0rem] border-[2px]
      "
    >
      <div
        className="flex  w-[79vw] h-[45vh] justify-center items-center 
        v:flex-col v:w-[100vw] v:justify-start v:h-[32rem]
        sm:flex-col sm:w-[100vw] sm:h-[auto]
        md:flex-col md:w-[100vw] md:h-[auto] 
        lg:h-[25rem]  
        xl:h-[24rem] 
        2xl:h-[25rem] "
      >
        <div
          className="flex w-[40vw] h-[35vh] 
          v:w-[100vw] v:h-[19rem]
          sm:w-[100vw] sm:h-[20rem] sm:mt-[2rem] 
          md:h-[20rem] md:mt-[3rem] md:w-[100vw]
          lg:mr-[0px] lg:w-[55%] 
          xl:mr-[0px] xl:w-[50%]
          2xl:mr-[0px] 2xl:w-[60%] 2xl:h-[100%]"
        >
          <div
            className="flex flex-col w-[100vw] 
            v:justify-start v:items-center
            sm:w-[100vw] sm:justify-center sm:items-center
            md:w-[100vw] md:justify-center md:items-center
            lg:pl-[0rem] lg:justify-center lg:items-center
            xl:pl-[0rem] xl:justify-center xl:items-center
            2xl:pl-[0rem] 2xl:justify-center 2xl:items-center 
           "
          >
            <div
              className="flex  uppercase h-[10vh] mt-[2rem] justify-start
              v:justify-center v:items-center v:mt-[0] v:h-[6rem] 
              sm:justify-center sm:items-center sm:h-[5rem] sm:mt-[0rem] sm:w-[98vw] 
              md:justify-center md:items-center md:h-[5rem] md:mt-[0] md:w-[100vw] 
              lg:mt-[0rem] lg:justify-center lg:h-[8rem] 
              xl:mt-[0rem] xl:justify-center xl:h-[8rem] 
              2xl:mt-[0rem] 2xl:justify-center 2xl:items-center 2xl:h-[8rem]"
            >
              <h1
                className="text-[8rem] font-medium 
               v:text-[4rem] 
               sm:text-[5.5rem] 
               md:text-[7rem]
               lg:text-[6rem] 
               xl:text-[7rem] 
               2xl:text-[8rem] 
               "
              >
                *Skills*
              </h1>
            </div>
            <div
              className="flex mt-[7rem]
              v:w-[88vw] v:mt-[0rem] 
              sm:w-[85vw] sm:mt-[1.5rem] sm:items-center 
              md:justify-center md:w-[85vw] md:mt-[2rem] 
              lg:mt-[0rem] lg:w-[90%] 
              xl:mt-[1.5rem] xl:w-[90%] 
              2xl:mt-[1rem] 2xl:w-[85%] 
              "
            >
              <span
                className="text-left text-[16px] opacity-[60%] text-[white] 
                font-[400] tracking-[0.3px] leading-[25px] 
                v:text-center 
                sm:text-[20px] sm:w-[39rem] sm:text-center sm:leading-[32px]  
                md:text-[21px] md:w-[39rem] md:text-center md:leading-[32px] 
                lg:text-[19px] lg:w-[auto] lg:text-center lg:leading-[26px] lg:tracking-[.3px]
                xl:text-[20px] xl:w-[auto] xl:text-center xl:leading-[28px] xl:tracking-[.5px]
                2xl:text-[22px] 2xl:w-[auto] 2xl:text-center 2xl:leading-[32px] 2xl:tracking-[.10px]
                
                "
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
          class=" items-start grid grid-cols-3 gap-[20px] 
          v:justify-items-center v:w-[90vw] v:h-[13rem] v:mt-[0rem] v:items-center v:gap-[1px] 
          sm:grid-cols-3 v:grid-cols-3 sm:gap-[10px] 
          sm:w-[80vw] sm:h-[17rem] sm:mt-[0rem] sm:justify-items-center sm:items-center
          md:grid-cols-6 md:gap-[0px] md:justify-items-center
          md:items-center md:w-[95vw] md:h-[10rem] md:mt-[2rem] 
          lg:gap-[0px] lg:w-[45%] lg:h-[18rem] lg:justify-items-center lg:items-center
          xl:gap-[0px] xl:w-[50%] xl:h-[20rem] xl:justify-items-center xl:items-center 
          2xl:gap-[0px] 2xl:w-[40%] 2xl:h-[100%] 2xl:justify-items-center 2xl:items-center
         "
        >
          <div className="border-[0px]  
           v:w-[5rem]
           sm:w-[7rem] 
           md:w-[7rem]
           lg:w-[7rem] 
           xl:w-[8.5rem] 
           2xl:w-[9rem]
           ">
            {" "}
            <CircularProgressbar
              value={95}
              styles={{
                text: {
                  fontSize: "18px",
                  fill: "#ffff",
                  trailColor: "#d6d6d6",
                  animation:"none",
                  strokeWidth:1,
                  
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
              className="uppercase font-thin"
              text={"html"}
            />
          </div>
          <div className="border-[0px]
            v:w-[5rem]
            sm:w-[7rem] 
            md:w-[7rem]
            lg:w-[7rem] 
            xl:w-[8.5rem] 
            2xl:w-[9rem]">
            {" "}
            <CircularProgressbar
              value={95}
              styles={{
                text: {
                  fontSize: "18px",
                  fill: "#ffff",
                  trailColor: "#d6d6d6",
                  animation:"none",
                  strokeWidth:1,
                  
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
              className="uppercase font-thin"
              text={"css"}
            />
          </div>
          <div className="border-[0px] 
             v:w-[5rem]
             sm:w-[7rem] 
             md:w-[7rem]
             lg:w-[7rem] 
             xl:w-[8.5rem] 
             2xl:w-[9rem]">
            {" "}
            <CircularProgressbar
              value={70}
              styles={{
                text: {
                  fontSize: "18px",
                  fill: "#ffff",
                  trailColor: "#d6d6d6",
                  animation:"none",
                  strokeWidth:1,
                  
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
              className="uppercase font-thin"
              text={"js"}
            />
          </div>
          <div className="border-[0px] 
          v:w-[5rem]
          sm:w-[7rem] 
          md:w-[7rem]
          lg:w-[7rem] 
          xl:w-[8.5rem] 
          2xl:w-[9rem]">
            {" "}
            <CircularProgressbar
              value={75}
              styles={{
                text: {
                  fontSize: "18px",
                  fill: "#ffff",
                  trailColor: "#d6d6d6",
                  animation:"none",
                  strokeWidth:1,
                  
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
              className="uppercase font-thin"
              text={"react"}
            />
          </div>
          <div className="border-[0px] 
          v:w-[5rem]
          sm:w-[7rem] 
          md:w-[7rem]
          lg:w-[7rem] 
          xl:w-[8.5rem] 
          2xl:w-[9rem]">
            {" "}
            <CircularProgressbar
              value={39}
              styles={{
                text: {
                  fontSize: "18px",
                  fill: "#ffff",
                  trailColor: "#d6d6d6",
                  animation:"none",
                  strokeWidth:1,
                  
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
              className="uppercase font-thin"
              text={"native"}
            />
          </div>
          <div className="border-[0px] 
          v:w-[5rem]
          sm:w-[7rem] 
          md:w-[7rem]
          lg:w-[7rem] 
          xl:w-[8.5rem] 
          2xl:w-[9rem]">
            {" "}
            <CircularProgressbar
              value={80}
              styles={{
                text: {
                  fontSize: "18px",
                  fill: "#ffff",
                  trailColor: "#d6d6d6",
                  animation:"none",
                  strokeWidth:1,
                  
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
              className="uppercase font-thin"
              text={"python"}
            />
          </div>
        </div>
      </div>
      <div
        className="flex 
        flex-col items-center justify-center 
        v:justify-center v:mt-[1rem] v:w-[97vw] v:h-[40rem] 
        sm:w-[100vw] sm:mt-[0rem] sm:h-[33rem]  
        md:h-[30rem] md:w-[98vw] md:mt-[.5rem]
        lg:h-[49vh]
        xl:h-[30rem] xl:mt-[1.5rem]
        2xl:h-[27rem]  2xl:mt-[2rem]
        "
      >
        <div
          className="w-[79vw] h-[10vh] 
          flex justify-center items-center 
          v:w-[100vw] v:h-[5rem]
          sm:h-[5rem] 
          md:h-[4vh]"
        >
          <h1
            className="text-[5rem] xl:text-[4.5rem] 2xl:text-[5rem] lg:text-[4.5rem] 
           sm:text-[3.5rem] sm:mt-[0rem] font-medium uppercase v:text-[2.2rem] 
           v:mt-[0rem] 2xl:mt-[0rem] md:text-[4rem] md:mt-[0rem] md:w-[100vw] text-center"
          >
            ❄️Soft skills❄️
          </h1>
        </div>

        <div
          class="grid grid-cols-4 h-[20vh] pt-[3rem] 
          gap-[2rem] items-center w-[75vw] 
          v:gap-[0] v:grid-cols-1 v:items-start v:h-[35rem] v:w-[80vw]  v:pt-[0rem] v:mt-[0rem]
          sm:mt-[0.2rem] sm:grid-cols-2 sm:pt-[1rem] sm:gap-[16px] sm:h-[22rem] sm:w-[85vw]
          md:grid-cols-2 md:mt-[2.5rem] md:h-[22rem] md:pt-[0] md:gap-[2rem] md:w-[80vw]
          lg:pt-[0] lg:gap-[1rem] lg:grid-cols-3 lg:mt-[1rem] lg:h-[18rem] lg:w-[100%]
          xl:pt-[0] xl:gap-[1rem] xl:grid-cols-3 xl:mt-[1rem] xl:h-[19rem] xl:w-[100%] 
          2xl:pt-[0] 2xl:gap-[2rem] 2xl:grid-cols-3 2xl:mt-[1rem] 2xl:h-[16rem] 2xl:w-[90%]

          "
        >
          {/* <CircularProgressbar value={percentage} text={"HTML"} /> */}

          <div>
            <div class="relative pt-1">
              <div
                class="w-[100%] overflow-hidden items-center h-[4rem] sm:h-[3.5rem] v:h-[3rem]
                 flex rounded-full
               border-[0] bg-black
                shadow-[0_0_1.8rem_inset_] shadow-[#7950F2]
                v:shadow-[0px_0_25px_inset_] v:shadow-[#7950F2]
                "
              >
                <div
                  class="ss1 flex flex-col h-[4rem] sm:h-[3.5rem] v:h-[3rem] border-[0]
                   justify-center
                   w-[50%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[#7950f2]
                   v:shadow-[0_0_20px_inset_] v:shadow-[#7950f2] 
                   "
                >
                  <span
                    className="text-[white] xl:text-[15px] lg:text-[14px]
                   capitalize font-medium text-start pl-[2rem]"
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
                class="overflow-hidden items-center h-[4rem] sm:h-[3.5rem] v:h-[3rem] flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[#FF66C4]
               v:shadow-[0px_0_25px_inset_] v:shadow-[#FF66C4]
               "
              >
                <div
                  class="ss2 flex flex-col h-[4rem] sm:h-[3.5rem] v:h-[3rem] text-center border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[#FF66C4]
                   v:shadow-[0_0_20px_inset_] v:shadow-[#FF66C4]
                   "
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px]
                   capitalize font-medium text-start pl-[2rem]">
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] sm:h-[3.5rem] v:h-[3rem] flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[#FF914D]
               v:shadow-[0px_0_25px_inset_] v:shadow-[#FF914D]
               "
              >
                <div
                  class="ss3 flex flex-col h-[4rem] sm:h-[3.5rem] v:h-[3rem] text-center border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[#FF914D]
                   v:shadow-[0_0_20px_inset_] v:shadow-[#FF914D]
                   "
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px]
                   text-start pl-[2rem] capitalize font-medium">
                    Ui | ux
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] sm:h-[3.5rem] v:h-[3rem]
                 flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[cyan]
               v:shadow-[0px_0_25px_inset_] v:shadow-[cyan]
               "
              >
                <div
                  class="ss4 flex flex-col h-[4rem] sm:h-[3.5rem] v:h-[3rem] text-center border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[cyan]
                   v:shadow-[0_0_20px_inset_] v:shadow-[cyan]
                   "
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px] 
                  capitalize font-medium text-start pl-[2rem] ">
                    adobe xd
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] sm:h-[3.5rem] v:h-[3rem]
                 flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[#7950f2]
               v:shadow-[0px_0_25px_inset_] v:shadow-[#7950f2]
               "
              >
                <div
                  class="ss5 flex flex-col h-[4rem] sm:h-[3.5rem] v:h-[3rem]  border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[#7950f2]
                   v:shadow-[0px_0_20px_inset_] v:shadow-[#7950f2]
                   "
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px]
                   capitalize font-medium text-start pl-[2rem]">
                    Wordpress
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] sm:h-[3.5rem] v:h-[3rem] flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[#FF66C4]
               v:shadow-[0px_0_25px_inset_] v:shadow-[#FF66C4]
               "
              >
                <div
                  class="ss6 flex flex-col h-[4rem] sm:h-[3.5rem] v:h-[3rem] text-center border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[#FF66C4]
                   v:shadow-[0px_0_20px_inset_] v:shadow-[#FF66C4]
                   
                   "
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px]
                  text-start pl-[2rem] capitalize font-medium ">
                    Webflow
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] sm:h-[3.5rem] v:h-[3rem] flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[#FF914D]
               v:shadow-[0px_0_25px_inset_] v:shadow-[#FF914D]
               "
              >
                <div
                  class="ss7 flex flex-col h-[4rem] sm:h-[3.5rem] v:h-[3rem] text-center border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   shadow-[0_0_1.1rem_inset_] shadow-[#FF914D]
                   v:shadow-[0px_0_20px_inset_] v:shadow-[#FF914D]
                   "
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px] capitalize 
                  text-start pl-[2rem] font-medium ">
                    3d design
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="relative pt-1">
              <div
                class="overflow-hidden items-center h-[4rem] sm:h-[3.5rem] v:h-[3rem] flex rounded-full border-[0]
               bg-black shadow-[0_0_1.5rem_inset_] shadow-[cyan]
               v:shadow-[0px_0_20px_inset_] v:shadow-[cyan]
               "

              >
                <div
                  class="ss8 flex flex-col h-[4rem] sm:h-[3.5rem] v:h-[3rem]  border-[0]
                   justify-center
                   w-[60%] rounded-full bg-[rgba(0, 0, 0, 0.1)]
                   v:shadow-[0px_0_25px_inset_] v:shadow-[cyan]
                   shadow-[0_0_1.1rem_inset_] shadow-[cyan]"
                >
                  <span className="text-[white] xl:text-[15px] lg:text-[14px]
                  text-start pl-[2rem] capitalize font-medium">
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


