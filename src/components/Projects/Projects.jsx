import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  pbg1,
  pbg2,
  pbg3,
  pbg4,
  pbg5,
  pbg6,
  pbg7,
  pbg8,
  pbg9,
  pbg10,
  pbg11,
  pbg12,
  pbg13,
  pbg14,
  pbg15,
} from "../../assets";
import "./Projects.css";
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination, Parallax } from "swiper";

export default function App() {
  return (
    <div className=" flex flex-col justify-center items-center w-[100vw] h-[100vh]  
    2xl:mt-[4rem]
    xl:mt-[5.5rem]
    lg:mt-[2rem]
    md:mt-[0rem]
    sm:mt-[8rem]
    v:mt-[2.5rem]
    ">
      <div className="pt-[3.5rem]
      v:pt-[1rem] 
      2xl:pt-[3rem]
      xl:pt-[0rem]
      lg:pt-[0rem] 
      md:pt-[0]
      sm:pt-[0rem]
      ">
        <h1 className="Namepro text-[white] text-[5.5rem] uppercase font-semibold 
        2xl:text-[4.5rem]
        xl:text-[5rem] 
        lg:text-[4.2rem] 
        md:text-[4.2rem] 
        sm:text-[3.4rem] 
        v:text-[29px]">
          ⚒️Projects Page⚒️
        </h1>
      </div>
      <div className="pt-[.5rem] ">
        <Swiper
          direction="horizontal"
          slidesPerView={1.3}
          speed={890}
          parallax={true}
          spaceBetween={30}
          grabCursor={false}
          centeredSlides={true}
          loop={true}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}        
          modules={[Mousewheel, Pagination, Parallax]}
          className="mySwiper w-[80vw] image-slider rounded-xl 
          v:h-[88vh] v:mt-[0rem]
          2xl:h-[50rem] 2xl:pt-[1rem]
          xl:h-[45rem] xl:pt-[0rem] 
          lg:h-[38rem] lg:pt-[1rem]
          sm:h-[49rem] sm:pt-[1rem] 
           "
          data-swiper-parallax="-23%"
          breakpoints={{
            // v 
            310: {
              slidesPerView: 1,
              pagination:false,              
            },
            // sm
            641: {
              slidesPerView: 1,
            },
            // md
            769: {
              slidesPerView: 1.2,
              spaceBetween:20,
            },
            // lg
            1025: {
              slidesPerView: 1.3,
            },
            // xl
            1281: {
              slidesPerView: 1.2,
            },
            1537: {
              slidesPerView: 1.3,
            },
          }}
        >
          <SwiperSlide data-swiper-parallax="-300">
            <div className="swiper-slide">
                <img src={pbg2} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  fountain
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div className="swiper-slide">
                <img src={pbg3} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                mountain
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div className="swiper-slide">
                <img src={pbg4} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  blue orange
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div className="swiper-slide">
                <img src={pbg5} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  maps
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div classNName="swiper-slide">
                <img src={pbg6} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  beach 
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div className="swiper-slide">
                <img src={pbg7} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                   mension
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div className="swiper-slide">
                <img src={pbg8} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                   magic 
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div className="swiper-slide">
                <img src={pbg9} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                   wolf
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div className="swiper-slide">
                <img src={pbg10} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  house
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}

