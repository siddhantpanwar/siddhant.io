import React from "react";
import { aboutImg } from "../assets";
const About = () => {
  return (
    <div className=" flex flex-col w-[100vw] h-[90vh]  justify-center items-center v:mt-[6rem]
     sm:w-[100vw] sm:h-[100vw] v:w-[100vw] v:h-[100vw] xl:ml-[10rem] xl:mt-[0] xl:h-[100vh]  ">
      <div
        className="flex flex-row v:flex-col v:items-center justify-center
         v:mt[0rem] 
       xl:w-[80vw] md:w-[77vw] w-[70vw] h-[45vh] m-5 md:m-[0] sm:w-[90vw] v:w-[80vw] v:h-[65vh]"
      >
        <div
          className="flex justify-center items-center
        lg:h-[35vh] lg:w-[23vw] lg:mr-[1.5rem] xl:h-[39vh] xl:w-[23vw] md:h-[33vh] md:w-[27vw] 
        sm:w-[40vw] sm:mr-[0] sm:h-[31vh]
        v:w-[61vw] v:mt-[0rem] v:h-[39vh]
         mt-[35px] h-[34vh] w-[24vw] rounded-xl "
        >
          <img
            src={aboutImg}
            className=" opacity-[85%] md:w-[15rem] md:h-[16rem] 
            v:w-[14rem] v:h-[15rem] v:mt-[0]
             lg:w-[16rem] lg:h-[17rem] xl:w-[17rem] xl:h-[19rem] w-[18rem]
             sm:w-[14rem] sm:h-[15rem]
             h-[19rem]  border-[#ff914dcc] border-[5px] blur-[0.49px] rounded-xl "
          />
        </div>
        <div
          className=" flex flex-col v:items-center pl-[3.5rem] 
        sm:w-[65vw] sm:h-[40vh] sm:pl-[2rem] sm:mt-[2rem]
        v:w-[80vw] v:h-[40vh] v:pl-[0rem]  v:m-[2rem]
         xl:w-[60vw] xl:h-[36vh] lg:w-[40vw] lg:h-[41vh] w-[70vw] mt-[3rem] 
         xl:mt-[3.5rem] lg:mt-[1rem] md:pl-[0rem] md:ml-[2rem] md:w-[47vw] md:h-[35vh] md:mt-[1.5rem] "
        >
          <div
            className="flex justify-start v:justify-center v:items-center md:pt-[2rem]
             sm:text-[2.4rem] md:w-[47vw] md:text-[3rem] 2xl:text-[6rem] 
           lg:pt-[3rem] text-[5rem] xl:text-[4.5rem] lg:text-[3.2rem] 
           v:text-[30px] v:w-[80vw] v:h-[5vh] v:pt-[1.5rem]
            font-medium uppercase"
          >
            <h1 >*Self summary*</h1>
          </div>
          <div className="flex flex-col v:items-center v:pt-[1rem] pt-[2rem] lg:pt-[1rem] h-[50vh] v:w-[70vw] v:h-[23vh] ">
            <h2
              className="text-[2rem] capitalize lg:text-[1.5rem] md:pt-[0] md:text-[1.7rem]
            sm:text-[1.5rem] sm:pt-[0]
            v:text-[19px] v:pt-[0]
             text-[#ff914dcc]"
            >
              ☁️Siddhant Panwar☁️
            </h2>
            <span
              className="text-[16px] opacity-[0.8] sm:text-[14px] sm:w-[24.5rem]
            v:text-[14px] v:w-[18rem] v:text-center
             md:w-[400px] md:text-[15px] md:leading-[19px] lg:w-[426px] pt-[5px]
             text-[white] font-[300] tracking-[0.2px] leading-[25px] w-[720px] "
            >
              I am a multi-disciplinary highly skilled and creative individual
              with over five years of experience in frontend development, UX/UI
              design. In addition to my professional experience, I am currently
              studying in 12th grade, pursuing a degree in a related field.
              {/* with
              years of experience under my belt, I have had the pleasure of
              collaborating with a wide range of clients, including startups,
              small businesses, and multinational corporations. */}
              {/* with years of experience under my belt, I have had the pleasure of
              collaborating with a wide range of clients, including startups,
              small businesses, and multinational corporations. Regardless of
              the size or scope of the project, I always approach each
              assignment with a fresh perspective, taking the time to truly
              understand my client's needs and goals. From there, I work
              tirelessly to develop solutions that not only meet but exceed
              their expectations. Thank you for taking the time to visit my
              portfolio website. I am always open to new opportunities and would
              be thrilled to work with you on your next project. Whether you
              have a clear idea in mind or need help developing a concept from
              scratch, I am here to help. Please don't hesitate to get in touch
              with me to discuss your ideas and requirements. */}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify center w-[70vw] h-[35vh] sm:w-[90vw] v:w-[90vw] v:pt-[4rem]">
        <div className=" flex flex-col justify-between v:gap-[2rem] w-[33.5vw] sm:w-[45vw] v:w-[45vw] p-[1rem]">
          <div className=" flex flex-col">
            <span className="text-[20px] v:text-[15px] v:text-center sm:text-[17px] uppercase font-medium">
              EXPERIENCE
            </span>
            <span className="pt-[0.2rem] text-[13px] v:text-center sm:text-[13px] opacity-[50%] text-[#FF914D]">
              2018-2023
            </span>
          </div>
          <div className=" flex flex-col">
            <span className="text-[20px] v:text-[14px] v:text-center sm:text-[17px]  uppercase font-medium">
              Front-End Developer
            </span>
            <span className="pt-[0.2rem] text-[13px] v:text-center sm:text-[13px] opacity-[55%] text-[#FF914D]">
              2020-2023
            </span>
          </div>
          <div className=" flex flex-col">
            <span className="text-[20px] v:text-[15px] v:text-center sm:text-[17px]  uppercase font-medium">
              UI/UX
            </span>
            <span className="pt-[0.2rem] text-[13px] v:text-center sm:text-[13px] opacity-[55%] text-[#FF914D]">
              2021-2023
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between v:gap-[2rem] w-[33.5vw] sm:w-[45vw] v:w-[45vw] p-[1rem]">
          <div className=" flex flex-col">
            <span className="text-[20px] v:text-[15px] v:text-center sm:text-[17px]  uppercase font-medium">
              education
            </span>
            <span className="pt-[0.2rem] text-[13px] v:text-center sm:text-[13px] opacity-[55%] text-[#FF914D]">
              2011-2023
            </span>
          </div>
          <div className=" flex flex-col ">
            <span className="text-[20px] v:text-[15px] v:text-center sm:text-[17px] uppercase font-medium">
              School
            </span>
            <span className="pt-[0.2rem] text-[13px] v:text-center sm:text-[13px] opacity-[55%] text-[#FF914D]">
              12 Grade
            </span>
          </div>
          <div className=" flex flex-col ">
            <span className="text-[20px] v:text-[15px] v:text-center sm:text-[17px] uppercase font-medium text-[white]">
              Freelance Designer
            </span>
            <span className="pt-[0.2rem] text-[13px] v:text-center sm:text-[13px] opacity-[55%] text-[#FF914D]">
              2022-2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
