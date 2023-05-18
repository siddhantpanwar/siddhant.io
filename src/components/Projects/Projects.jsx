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
    <div className=" flex flex-col justify-start items-center w-[100vw] h-[100vh]">
      <div className="pt-[3.5rem] v:pt-[1.5rem]">
        <h1 className="Namepro text-[white] text-[5.5rem] uppercase font-semibold 
        xl:text-[5rem] lg:text-[4.2rem] md:text-[4.2rem] sm:text-[3.4rem] v:text-[29px]">
          ⚒️Projects Page⚒️
        </h1>
      </div>
      <div className="pt-[.5rem]">
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
          className="mySwiper w-[80vw] h-[75vh] xl:h-[75vh] v:h-[88vh]
           image-slider rounded-xl 
           "
          data-swiper-parallax="-23%"
          breakpoints={{
            // v 
            310: {
              slidesPerView: 1,
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
            <div class="swiper-slide">
                <img src={pbg2} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  fountain
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg3} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                mountain
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg4} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  blue orange
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg5} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  maps
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg6} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  beach forest
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg7} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  Night knight
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg8} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  glowing forest
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg9} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  flying wolf
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg10} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  
                  sky mension
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg11} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  
                   wreckage
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg12} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  
                  whale forest
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg13} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  
                  pink city
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg14} alt="Marbella, Spain" />
              <figure>
                <figcaption>                 
                  magic forest
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide data-swiper-parallax="-300">
            <div class="swiper-slide">
                <img src={pbg15} alt="Marbella, Spain" />
              <figure>
                <figcaption>
                  
                  heaven forest
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="text-slider mt-[-4.3rem] ">
          <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={false}
            grabCursor={true}
            speed={1000}
            parallax={true}
            pagination={{
              clickable: false,
            }}
            modules={[ Parallax,Mousewheel, Pagination]}
            className="mySwiper border-[none]  h-[9rem] text-[#ffffff]"
            ref={textSliderRef}
            data-swiper-parallax="-23%"
           
          >
            <SwiperSlide data-swiper-parallax="-300">
              <h4 className="text-[5.5rem] uppercase font-[500] transition ease-in-out delay-150">House</h4>
            </SwiperSlide>
            <SwiperSlide data-swiper-parallax="-300">
              <h4 className="text-[5.5rem] uppercase font-[500] transition ease-in-out delay-150">3d based art</h4>
            </SwiperSlide>
            <SwiperSlide data-swiper-parallax="-300">
              <h4 className="text-[5.5rem] uppercase font-[500] transition ease-in-out delay-150">mountain</h4>
            </SwiperSlide>
            <SwiperSlide data-swiper-parallax="-300">
              <h4 className="text-[5.5rem] uppercase font-[500] transition ease-in-out delay-150">blue orange</h4>
            </SwiperSlide>
            <SwiperSlide data-swiper-parallax="-300">
              <h4 className="text-[5.5rem] uppercase font-[500] transition ease-in-out delay-150">maps</h4>
            </SwiperSlide>
          </Swiper>
        </div> */}
      </div>
    </div>
  );
}

//   const swiper2 = new Swiper("#swiper-2", {
//
//   });

//   return () => {
//     swiper1.destroy();
//     swiper2.destroy();
//   };
// }, []);
