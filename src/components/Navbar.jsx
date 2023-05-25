import React from "react";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { logo, close, menu } from "./../assets/index";


const Navbar = () => {
  const [Active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  // const [about, setabout] = useState(false);

  function togglehandler() {
    setToggle(!toggle);
  }
  function nevigate(active){
    if(active === "About"){
      window.scrollTo({
        top:1000,
        behavior:'smooth'
      })
    }
    if(active === "Skills"){
      window.scrollTo({
        top:2000,
        behavior:'smooth'
      })
    }
    if(active === "Projects"){
      window.scrollTo({
        top:3000,
        behavior:'smooth'
      })
    }
    if(active === "Contact"){
      window.scrollTo({
        top:4000,
        behavior:'smooth'
      })
    }
  }

  return (
    <div
      className="flex flex-col justify-between w-[10rem]
        v:w-[100vw] v:flex v:justify-center v:pt-[2rem] v:px-[2rem]
    sm:w-[100vw] sm:flex sm:justify-center sm:pt-[2rem] sm:px-[2rem]
     md:w-[100vw] md:flex md:justify-center md:pt-[2rem] md:px-[3rem] "
    >
      <div
        className="flex pt-[4rem] justify-center items-center v:justify-between v:pt-[0]
       v:items-center  sm:justify-between sm:pt-[0.5rem] sm:items-center 
       md:justify-between md:pt-[0.5rem] md:items-center "
      >
        <Link
          to="/"
          className=""
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            // setabout(false);
          }}
        >
          <img
            className={`v:w-[5rem] w-[6rem] animate-spin object-contain text-white`}
            src={logo}
            alt="logo"
          />
        </Link>

        <div className="lg:hidden xl:hidden 2xl:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={togglehandler}
            className="text-[white] object-contain cursor-pointer w-[3rem]"
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } z-20 fixed top-0 right-0 left-0 backdrop-blur-2xl `}
          >
            {/* ---------------------------------------------inside mobile nevigation--------------------- */}
            <div className="flex flex-col justify-between w-[100vw] h-[100vh]  ">
              <div className="pt-[2rem] pl-[2rem] pr-[2rem] ">
                <Link
                  to="/"
                  className="flex flex-row justify-between"
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    className=" w-[5rem] animate-spin object-contain text-white"
                    src={logo}
                    alt="logo"
                  />
                  <img
                    className="w-[3rem] animate-pulse object-contain"
                    src={close}
                    alt="close"
                    onClick={togglehandler}
                  />
                </Link>
              </div>

              <ul className="list-none flex flex-col gap-10">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      Active === link.title ? "text-white" : "text-[#adadad]"
                    } cursor-pointer text-[1.7rem] text-center uppercase font-medium`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                      // window.scrollTo(0, 0);
                      nevigate(link.id)
                 
                    }}
                  >
                    <a to={`${link.title}`}>{link.title}</a>
                  </li>
                ))}
              </ul>

              <div>
                <div
                  className="flex flex-row justify-between]
                 gap-5 h-[5rem] pt-[1rem] pl-[2rem]"
                >
                  <a
                    className=""
                    href="https://twitter.com/SIDDHANTPANWA17"
                    target="_blank"
                  >
                    <svg
                      className="h-[2rem] w-[2rem] fill-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:fill-[#7f59f3] duration-300 bg-blur"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="twitter"
                    >
                      <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path>
                    </svg>
                  </a>
                  <a href="https://github.com/siddhantpanwar" target="_blank">
                    <svg
                      className="h-[2rem] w-[2rem] fill-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:fill-[#7f59f3] duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      id="github"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                        ></path>
                        <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                      </g>
                    </svg>
                  </a>
                  <a href="mailto:siddhantpanwar225@gmail.com" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" fill-white h-[2rem] w-[2rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:fill-[#7f59f3] duration-300"
                      viewBox="0 0 32 32"
                      id="mail"
                    >
                      <path
                        // fill="#ffffff"
                        d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                      ></path>
                      <path d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* ---------------------------------------------------- */}
          </div>
        </div>
      </div>
      <nav className="flex flex-col items-center v:hidden sm:hidden md:hidden">
        <div className="flex flex-row-reverse list-none rotate-[-90deg] gap-5">
          {navLinks.map((link) => (
            <li
            key={link.id}
            className={`${
              Active === link.title ? "text-white" : "text-[#adadad]"
            } cursor-pointer text-[1.3rem] text-center  font-medium`}
            onClick={() => {
              setActive(link.title);
              setToggle(!toggle);
              // window.scrollTo(0, 0);
              nevigate(link.title)
              
            }}
            >
              <Link to={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </div>
      </nav>
      <div className="v:hidden sm:hidden md:hidden flex flex-col items-center pb-[4rem] gap-5">
        <a
          className=""
          href="https://twitter.com/SIDDHANTPANWA17"
          target="_blank"
        >
          <svg
            className="h-[2rem] w-[2rem] fill-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:fill-[#7f59f3] duration-300 bg-blur"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="twitter"
          >
            <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path>
          </svg>
        </a>
        <a href="https://github.com/siddhantpanwar" target="_blank">
          <svg
            className="h-[2rem] w-[2rem] fill-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:fill-[#7f59f3] duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            id="github"
          >
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
              ></path>
              <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
            </g>
          </svg>
        </a>
        <a href="mailto:siddhantpanwar225@gmail.com" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white h-[2rem] w-[2rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:fill-[#7f59f3] duration-300"
            viewBox="0 0 32 32"
            id="mail"
          >
            <path
              // fill="#ffffff"
              d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
            ></path>
            <path d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
