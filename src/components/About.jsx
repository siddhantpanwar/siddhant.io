import React from "react";
import { aboutImg } from "../assets";
const About = () => {
  return (
    <div 
      className=" flex flex-col 
       justify-start items-center 
       v:w-[100vw] v:h-[auto] v:mt-[0rem]
       sm:w-[100vw] sm:h-[auto]
       md:w-[100vw] md:h-[auto] 
       lg:w-[100vw] lg:h-[auto] lg:ml-[8rem]
       xl:w-[100vw] xl:h-[auto] xl:ml-[8rem]
       2xl:w-[100vw] 2xl:h-[auto] 2xl:ml-[8rem]"
    >

      <div
        className="flex flex-row justify-start 
         v:pt-[2rem] v:items-center v:flex-col v:w-[100vw] v:h-[35rem]
         sm:w-[95vw] sm:flex-col sm:items-center sm:mt-[3rem]
         md:w-[95vw] md:flex-col md:items-center md:mt-[5rem] 
         lg:w-[85vw] lg:flex-row lg:items-center lg:mt-[2rem] 
         xl:w-[85vw] xl:flex-row xl:items-center xl:mt-[2rem] xl:justify-center 
         2xl:w-[85vw] 2xl:flex-row 2xl:items-center 2xl:justify-center 2xl:mt-[0rem] 
       "
      >
        <div
          className="flex justify-center items-center rounded-xl
          v:w-[auto] v:mt-[0rem] v:h-[auto] 
          sm:w-[95vw] sm:mr-[0] sm:h-[20rem] 
          md:w-[95vw] md:mr-[0] md:h-[20rem] 
          lg:h-[auto] lg:w-[45%] lg:mr-[0rem]
          xl:h-[auto] xl:w-[30%] xl:mr-[0rem]
          2xl:h-[auto] 2xl:w-[30%] 2xl:mr-[0rem]
         "
        >
          <img
            src={aboutImg}
            className="opacity-[85%] border-[#ff914dcc] 
            border-[5px] blur-[0.49px] rounded-xl 
            v:w-[14rem] v:h-[16rem] v:mt-[0]
            sm:w-[19rem] sm:h-[21rem]
            md:w-[21rem] md:h-[23rem]
            lg:w-[18rem] lg:h-[21rem]
            xl:w-[19rem] xl:h-[22rem]
            2xl:w-[20rem] 2xl:h-[20rem] 
            "
          />
        </div>
        <div
          className=" flex flex-col
          pl-[0rem] w-[70vw] mt-[0rem] 
          v:w-[100vw] v:h-[90vh] v:pl-[0rem] v:pt-[1rem] v:items-center
          sm:w-[95vw] sm:h-[20rem] sm:pl-[0rem] sm:mt-[2rem] sm:items-center
          md:w-[95vw] md:h-[20rem] md:pl-[0rem] md:mt-[4rem] md:items-center
          lg:mt-[0rem] lg:w-[70%] lg:h-[20rem] lg:flex-col
          xl:mt-[0rem] xl:w-[60%] xl:h-[20rem] xl:flex-col 
          2xl:mt-[0rem] 2xl:w-[55%] 2xl:h-[20rem] 2xl:flex-col 
          "
        >
          <div
            className="flex justify-center font-medium uppercase text-[5rem]
            v:justify-center v:items-center v:pt-[0] v:h-[6vh] v:text-[35px] v:w-[100vw]  
            sm:text-[4.3rem]  sm:w-[100%] sm:h-[5rem] sm:items-center
            md:text-[5rem]  md:w-[100%] md:h-[6rem] md:items-center
            lg:pt-[0rem] lg:mt-[.5rem] lg:text-[4rem] lg:items-start
            lg:justify-start lg:h-[6rem]
            xl:pt-[0rem] xl:mt-[.5rem] xl:text-[4.5rem] xl:items-start
            xl:justify-start xl:h-[6rem]
            2xl:justify-start 2xl:h-[6rem]
            "
          >
            <h1>*Self summary*</h1>
          </div>
          <div
            className="flex flex-col h-[50vh] pt-[2rem] 
           v:items-center v:pt-[0rem] v:w-[100vw] v:h-[25vh]
            sm:pt-[0] sm:items-center sm:h-[29vh]
            md:pt-[.5rem] md:items-center md:h-[29vh]
            lg:pt-[0rem] lg:items-start lg:h-[auto] 
            xl:pt-[0rem] xl:items-start xl:h-[auto] 
            2xl:pt-[.5rem] 2xl:items-start 2xl:h-[auto] 
            "
          >
            <h2
              className="text-[2rem] capitalize
              v:text-[23px] v:pt-[0]
              sm:text-[2.3rem] sm:pt-[0]
              md:text-[3rem] md:pt-[0]
              lg:text-[1.9rem] 
              xl:text-[2.3rem] 
              2xl:text-[2.5rem] 
              text-[#ff914dcc]"
            >
              ☁️Siddhant Panwar☁️
            </h2>
            <span
              className="text-[16px] opacity-[0.8]
              v:text-[14px] v:w-[18rem] v:text-center v:pt-[0rem]
              sm:text-[20px] sm:w-[39rem] sm:text-center sm:leading-[32px] sm:pt-[.5rem]
              md:text-[21px] md:w-[39rem] md:text-center md:leading-[32px] md:pt-[.5rem]
              lg:w-[30rem] lg:pt-[.2rem] lg:text-[1.1rem]
              xl:w-[40rem] xl:pt-[.5rem] xl:text-[1.2rem] xl:leading-[26px] xl:tracking-[.3px]
              2xl:w-[50rem] 2xl:pt-[.5rem] 2xl:text-[1.2rem] 2xl:leading-[29px] 2xl:tracking-[.5px]
              text-[white] font-[300] tracking-[0.6px] leading-[25px] w-[720px] "
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
      <div className="grid grid-cols-2 gap-[0rem] 
      v:h-[18rem] v:w-[90vw] v:mt-[5rem]
      sm:h-[22rem] sm:w-[90vw] sm:justify-items-center sm:mt-[2rem]
      md:h-[22rem] md:w-[90vw] md:justify-items-center md:mt-[5rem]
      lg:h-[26rem] lg:w-[90%] lg:justify-items-center lg:mt-[5rem] 
      xl:h-[26rem] xl:w-[90%] xl:justify-items-center xl:mt-[5rem] 
      2xl:h-[26rem] 2xl:w-[90%] 2xl:justify-items-center 2xl:mt-[5rem] 
      ">
        <div className=" flex flex-col sm:items-center sm:justify-center">
          <span className="text-[20px] 
          v:text-[16px] v:text-center
          sm:text-[20px] sm:items-center sm:justify-center
          lg:text-[21px] lg:items-center lg:justify-center lg:tracking-[2px]
          xl:text-[22px] xl:items-center xl:justify-center xl:tracking-[2px]
          2xl:text-[21px] 2xl:items-center 2xl:justify-center 2xl:tracking-[2px]
          uppercase font-medium tracking-[1px]">
            school
          </span>
          <span className="pt-[0.2rem] text-[20px] font-medium text-[#FF914D]
           v:text-center v:text-[15px] 
           sm:text-[18px] opacity-[80%]
           lg:text-[16px] lg:text-center
           xl:text-[17px] xl:text-center
           2xl:text-[17px] 2xl:text-center uppercase">
            12 grade
          </span>
        </div>
       
        <div className=" flex flex-col sm:items-center sm:justify-center">
          <span className="text-[20px] 
          v:text-[18px] v:text-center
          sm:text-[20px] sm:items-center sm:justify-center
          lg:text-[21px] lg:items-center lg:justify-center lg:tracking-[2px]
          xl:text-[22px] xl:items-center xl:justify-center xl:tracking-[2px]
          2xl:text-[21px] 2xl:items-center 2xl:justify-center 2xl:tracking-[2px]
          uppercase font-medium tracking-[1px]">
            UI/UX
          </span>
          <span className="pt-[0.2rem] text-[20px] font-medium text-[#FF914D]
           v:text-center v:text-[15px]
           sm:text-[18px] opacity-[80%]
           lg:text-[16px] lg:text-center
           xl:text-[17px] xl:text-center
           2xl:text-[17px] 2xl:text-center">
            2021-2023
          </span>
        </div>

        <div className=" flex flex-col sm:items-center sm:justify-center">
          <span className="text-[20px] 
          v:text-[18px] v:text-center
          sm:text-[20px] sm:items-center sm:justify-center
          lg:text-[21px] lg:items-center lg:justify-center lg:tracking-[2px]
          xl:text-[22px] xl:items-center xl:justify-center xl:tracking-[2px]
          2xl:text-[21px] 2xl:items-center 2xl:justify-center 2xl:tracking-[2px]
          uppercase font-medium tracking-[1px]">
            education
          </span>
          <span className="pt-[0.2rem] text-[20px] font-medium text-[#FF914D]
           v:text-center v:text-[15px]
           sm:text-[18px] opacity-[80%]
           lg:text-[16px] lg:text-center
           xl:text-[17px] xl:text-center
           2xl:text-[17px] 2xl:text-center">
            2011-2023
          </span>
        </div>

        <div className="flex flex-col sm:items-center sm:justify-center">
          <span className="text-[20px] 
          v:text-[18px] v:text-center 
          sm:text-[20px] sm:items-center sm:justify-center
          lg:text-[21px] lg:items-center lg:justify-center lg:tracking-[2px]
          xl:text-[22px] xl:items-center xl:justify-center xl:tracking-[2px]
          2xl:text-[21px] 2xl:items-center 2xl:justify-center 2xl:tracking-[2px]
          uppercase font-medium tracking-[1px]">
            EXPERIENCE
          </span>
          <span className="pt-[0.2rem] text-[20px] font-medium text-[#FF914D]
           v:text-center v:text-[15px]
           sm:text-[18px] opacity-[80%]
           lg:text-[16px] lg:text-center
           xl:text-[17px] xl:text-center
           2xl:text-[17px] 2xl:text-center">
            2018-2023
          </span>
        </div>


        <div className=" flex flex-col sm:items-center sm:justify-center">
          <span className="text-[20px] 
          v:text-[18px] v:text-center
          sm:text-[20px] sm:items-center sm:justify-center
          lg:text-[21px] lg:items-center lg:justify-center lg:tracking-[2px]
          xl:text-[22px] xl:items-center xl:justify-center xl:tracking-[2px]
          2xl:text-[21px] 2xl:items-center 2xl:justify-center 2xl:tracking-[2px]
          uppercase font-medium tracking-[1px]">
            Front-End <br className="sm:hidden lg:hidden  xl:hidden 2xl:hidden"/> Developer
          </span>
          <span className="pt-[0.2rem] text-[20px] font-medium text-[#FF914D]
           v:text-center v:text-[15px]
           sm:text-[18px] opacity-[80%]
           lg:text-[16px] lg:text-center
           xl:text-[17px] xl:text-center
           2xl:text-[17px] 2xl:text-center">
            2020-2023
          </span>
        </div>
        <div className=" flex flex-col sm:items-center sm:justify-center ">
          <span className="text-[20px] 
          v:text-[18px] v:text-center
          sm:text-[20px] sm:items-center sm:justify-center
          lg:text-[21px] lg:items-center lg:justify-center lg:tracking-[2px]
          xl:text-[22px] xl:items-center xl:justify-center xl:tracking-[2px]
          2xl:text-[21px] 2xl:items-center 2xl:justify-center 2xl:tracking-[2px]
          uppercase font-medium tracking-[1px]">
            Freelance <br className="sm:hidden lg:hidden xl:hidden 2xl:hidden"/> Designer
          </span>
          <span className="pt-[0.2rem] text-[20px] font-medium text-[#FF914D]
           v:text-center v:text-[15px]
           sm:text-[18px] opacity-[80%]
           lg:text-[16px] lg:text-center
           xl:text-[17px] xl:text-center
           2xl:text-[17px] 2xl:text-center">
            2022-2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
