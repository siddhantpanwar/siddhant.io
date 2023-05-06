
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitTextJS from 'split-text-js';

function HeroLoader() {
  useEffect(() => {
    const titles = gsap.utils.toArray('p');
    const tl = gsap.timeline({ repeat: -1 });
    titles.map((title) => {
      const splitTitle = new SplitTextJS(title);
      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        },
        '<'
      ).to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger: 0.03,
        },
        '<1'
      );
    });
  }, []);

  return (
    <div className='flex mt-[10rem] items-center v:mt-[5rem]
     sm:mt-[2rem] md:mt-[2rem] lg:mt-[9rem] 2xl:mt-[7rem]'>
       {/* sm:text-[40px] */}
      <div className=' flex-col leading-[0] m-0 text-[3rem] sm:text-[2.5rem] md:text-[3.5rem] text-[#e2d4baff] text-center v:text-[25px] 2xl:text-[3rem] '>
        <p className=''>Cloud☁️</p>
        <p className=''>Webflow</p>
        <p className=''>Wordpress</p>
        <p className=''>UI Designer</p>
        <p className=''>UX Designer</p>
        <p className=''>Creative Designer</p>
        <p className=''>Frontend Developer</p>
      </div>
    </div>
  );
}

export default HeroLoader;