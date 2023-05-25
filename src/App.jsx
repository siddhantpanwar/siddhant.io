import { About, Navbar, Skills } from "./components";
import { Hero } from "./components";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Preloader from "./components/PreLoader/Preloader";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
const App = () => {
  // ----------------------------PRELOADER-----------------------------------
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
    // 8000
  }, []);
  // ----------------------------PRELOADER-End-----------------------------------
  // ----------------------------About-------------------------------------------

  // ----------------------------About-End---------------------------------------

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          {/* <div className="flex bg-cover bg-[url('./assets/bg/bg12.jpg')]  w-[100vw] h-[100vh] v:flex-col sm:flex-col"> */}
          {/* <div className="flex bg-cover bg-[url('./assets/bg/bg13.jpg')]  w-[100vw] h-[100vh] v:flex-col sm:flex-col"> */}
          {/* <div className="flex bg-cover bg-[url('./assets/bg/bg14.jpg')]  w-[100vw] h-[100vh] v:flex-col sm:flex-col"> */}
          <div className="flex flex-col ">
            <div
              className="flex bg-cover flex-row bg-[url('./assets/bg/rb1.jpg')] m-0 
              v:flex-col
              sm:flex-col
              md:flex-col"
            >
              <div
                className="flex lg:fixed xl:fixed 2xl:fixed
                lg:h-[100vh]
               xl:h-[100vh] 2xl:h-[100vh]"
              >
                <Navbar />
              </div>
              <div className="w-[100vw] h-[100vh] ">
                <Hero />
              </div>
            </div>
            <div
              className="flex justify-center bg-black items-center bg-contain 
              v:h-[auto] v:pl-[0] 
              sm:pl-[0] 
              md:w-[100vw] md:h-[auto] md:pl-[0]
              xl:w-[100vw] xl:h-[100vh] xl:pr-[0rem] 
              lg:w-[100vw] lg:h-[100vh] 
              2xl:h-[100vh] 2xl:mt-[1.5rem]
              "
            >
              <About />
            </div>
            <div
              className="flex items-center justify-center 
              v:pl-[0] bg-black v:mt-[0rem]  v:w-[100vw] v:h-[auto] 
              sm:pl-[0] 
              md:h-[100vh] md:w-[100vw] md:mt-[0]  md:pl-[0] 
              lg:h-[100vh] lg:w-[100vw] lg:mt-[0] lg:pl-[5rem]
              xl:h-[100vh] xl:w-[100vw] xl:mt-[0] xl:pl-[5rem]
              2xl:h-[100vh] 2xl:pl-[4rem]  2xl:mt-[1.5rem] border-green-800
             "
            >
              <Skills />
            </div>
            <div
              className="flex items-center justify-center bg-[black] h-[100vh] 
              v:pl-[0] v:mt-[0rem]  
              sm:pl-[0] 
              md:pl-[0] 
              lg:pl-[7rem] 
              xl:pl-[6rem] 
              2xl:pl-[6rem] 2xl:mt-[1.5rem] 
             "
            >
              <Projects />
            </div>
            <div
              className=" border-yellow-300  flex justify-center items-center
            2xl:h-[100vh] 2xl:w-[100vw] 2xl:pl-[6rem] 
            xl:h-[100vh] xl:w-[100vw] xl:pl-[6rem] 
            lg:h-[100vh] lg:w-[100vw] lg:pl-[6rem] 
            md:h-[100vh] md:w-[100vw] md:pl-[0rem] 
            v:h-[auto] v:w-[100vw] v:pl-[0rem] "
            >
              <Contact />
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
