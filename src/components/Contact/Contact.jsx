import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "./mailanimation.json";
import Sm from "./Sm";

function Contact() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrors((prevState) => ({ ...prevState, email: "Email is required" }));
    } else if (!emailRegex.test(email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Invalid email address",
      }));
    } else {
      setErrors((prevState) => ({ ...prevState, email: "" }));
    }
  };

  return (
    <div className="flex flex-col w-[100%] h-[100vh] justify-center items-center
    xl:h-[95vh] 
    lg:h-[100vh] lg:mt-[0] lg:justify-center
    md:h-[100vh] md:justify-start
    sm:h-[95vh] sm:justify-start 
    v:h-[auto] v:justify-start v:mt-[1rem] 
    ">
      <div
        className="flex  uppercase h-[10vh] mt-[2rem] justify-start 
        v:justify-center v:items-center v:mt-[2rem] v:h-[auto] v:my-[0]
        sm:justify-center sm:items-center sm:h-[5rem] sm:my-[2rem] sm:w-[98vw] 
        md:justify-center md:items-center md:h-[5rem] md:mb-[2rem] md:mt-[3rem] md:w-[100vw] 
        lg:mt-[2rem] lg:justify-center lg:h-[6rem] lg:mb-[.5rem] lg:my-[0rem]
        xl:mt-[0rem] xl:justify-center xl:h-[6rem]xl:pt-[0]
        2xl:mt-[5rem] 2xl:justify-center 2xl:items-center 2xl:my-[0rem] 2xl:h-[6rem] "
      >
        <h1
          className="text-[8rem] font-medium 
         v:text-[2.5rem] 
         sm:text-[4.5rem] 
         md:text-[5rem]
         lg:text-[4.5rem] 
         xl:text-[5rem] 
         2xl:text-[6rem] 
               "
        >
          ☎️Contact☎️
        </h1>
      </div>
      <div
        className="flex items-center h-[85%] w-[90%] 
      v:flex-col v:w-[100%] v:h-[70rem] 
      2xl:h-[80%] 2xl:w-[90%] 
      xl:h-[80%] xl:w-[90%] xl:mt-[2rem]
      lg:flex-row lg:justify-between lg:h-[80%] lg:w-[95%]
      md:flex-row md:justify-between md:h-[80%] md:w-[95%]  md:mt-[-1rem]
      sm:flex-col sm:justify-between sm:h-[80%] sm:w-[100%] 
      "
      >
        <div
          className="flex w-[70%] h-[30%] m-[0rem]
        2xl:justify-center 2xl:w-[50%] 2xl:h-[100%] 
        xl:justify-center xl:w-[50%] xl:h-[80%] 
        lg:justify-center lg:w-[40%] lg:h-[100%] lg:mt-[-5rem]
        md:justify-center md:w-[40%] md:h-[70%] md:mt-[-5rem]
        sm:justify-center sm:w-[100%] sm:h-[40%] sm:mt-[-4rem] 
        v:justify-center v:w-[100%] v:h-[30%] v:mt-[-2rem] v:mb-[-3rem]
        "
        >
          <Lottie className="w-[100%]" animationData={animationData} />
        </div>

        <div
          className="flex flex-col w-[55%] h-[100%] m-[0rem] 
        justify-center items-center 
        v:h-[70%] v:w-[100%]
        2xl:w-[65%]
        xl:w-[60%] xl:h-[100%]
        lg:h-[100%] lg:justify-start lg:w-[60%]
        md:h-[90%] md:justify-center md:w-[60%] 
        sm:h-[70%] sm:justify-center sm:w-[100%]" 
        >
          <div className="w-[80%] text-center 
          md:w-[90%]
          v:justify-center v:items-center v:flex v:flex-col v:w-[85%]
          ">
            <h2
              className="
            font-medium capitalize
            2xl:text-[2.5rem] 2xl:pb-[.6rem]
            xl:text-[2.5rem] xl:pb-[0rem] xl:mt-[0rem]
            lg:text-[2rem] lg:pb-[.4rem] lg:w-[100%] lg:mt-[1rem]
            md:text-[2.3rem] md:pb-[.3rem] md:w-[100%] md:mt-[0rem]
            sm:text-[2rem] sm:pb-[0rem] sm:w-[100%] sm:mt-[-2rem]
            v:text-[2rem] v:pb-[0rem] v:w-[100%] v:mt-[0rem]
            "
            >
              Let's Work Together
            </h2>
            <span
              className="text-left text-[16px] opacity-[60%] text-[white] 
                font-[400] tracking-[0.3px] leading-[25px]
                v:text-center v:w-[100%] v:tracking-[1px] v:leading-[22px] v:text-[15px]
                sm:text-[15px] sm:w-[39rem] sm:text-center sm:leading-[0px]  
                md:text-[15px] md:w-[39rem] md:text-center md:leading-[0px] 
                lg:text-[16px] lg:w-[auto] lg:text-center lg:leading-[0px] lg:tracking-[0px]
                xl:text-[16px] xl:w-[auto] xl:text-center xl:leading-[0px] xl:tracking-[.5px]
                2xl:text-[17px]  2xl:text-center 2xl:leading-[0px] 2xl:tracking-[0px]
                
                "
            >
              I'm thrilled that you've taken the time to visit and explore my
              work. This page serves as a gateway for us to connect,
              collaborate, and discuss exciting opportunities. Whether you have
              a project in mind, a question to ask, or simply want to say hello,
              I'm here and eager to hear from you.
            </span>
          </div>
          <form
            onSubmit="submit"
            name="contact v1"
            method="POST"
            data-netlify="true"
            netlify
            className="w-[80%] h-[60%] mt-[2rem] flex flex-col justify-center 
            xl:h-[60%] xl:mt-[1rem]
            lg:h-[55%] lg:mt-[1rem]
            md:h-[60%] md:mt-[1.5rem] md:w-[90%]
            sm:h-[70%] sm:mt-[2rem]
            v:h-[65%] v:mt-[1rem] v:w-[85%] 
          
            "
          >
            <input type="hidden" name="form" value="contact v1"/>
            <div
              className="flex gap-[1rem] justify-center
             items-center w-[100%] h-[40%] 
             v:flex-col 
             
             "
            >
              <div className="w-[50%] v:w-[100%]">
                <input
                  type="text"
                  id="username"
                  placeholder="Fullname"
                  name="username"
                  className="w-[100%] rounded-full  bg-[#000000]
                  shadow-[0px_0px_.9rem_inset_5px_] shadow-[#7950f2]
                  px-[1.5rem] py-2 h-[3.5rem]
                  "
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-[50%] v:w-[100%]">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  className={`w-[100%] px-[1.5rem] py-2 h-[3.5rem]
                  rounded-full bg-[#000000] shadow-[#7950f2]
                  shadow-[0px_0px_.9rem_inset_5px_] 
                    ${errors.email ? "shadow-[#ff1b1b]" : "shadow-[#7950f2]"}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>
            <div
              className="flex justify-center items-start pt-[1rem] 
              v:h-[13rem]
              xl:h-[13rem] h-[50%] w-[100%] 
            "
            >
              <textarea
                id="message"
                rows="50"
                // cols="60"
                className="py-[1.5rem] px-[1.5rem] min-h-[30%] bg-[#000000]
                shadow-[0px_0px_.9rem_inset_5px_] shadow-[#7950f2]

                 max-h-[80%] rounded-xl w-[96%]
                 xl:w-[100%] 
                 "
                placeholder="Message"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div
              className="text-center w-[100%] items-center 
            flex flex-col justify-center 
            v:h-[12rem] v:mt-[-1rem]
            xl:mt-[-1rem] 
            "
            >
              <button
                type="submit"
                className="px-6 py-3 w-[80%] font-medium
                 text-white rounded-full hover:shadow-[#4bc6ff]
                  transition-all ease-in-out
                 bg-[rgba(0, 0, 0, 0.1)] uppercase text-[20px]
                 shadow-[0px_0px_.6rem_inset_7px_] shadow-[#7950f2]
                 v:w-[90%]
                 sm:w-[90%]
                 "
              >
                Submit
              </button>
              <div className="flex mt-[1.5rem] w-[90vw] h-[5rem] 
               justify-center 
               v:h-[3rem] v:mt-[1.9rem]
               2xl:w-[30vw] 2xl:mt-[2.5rem] 
               xl:w-[30vw] xl:mt-[2rem] xl:h-[auto]
               lg:w-[30vw] lg:mt-[2rem] lg:h-[auto]
               md:w-[30vw] md:mt-[2rem] md:h-[auto]
               sm:w-[80vw] sm:my-[2rem] sm:h-[auto]
              ">
                <Sm />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
