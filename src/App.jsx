import { About, Navbar, Skills } from "./components";
import { Hero } from "./components";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Preloader from "./components/PreLoader/Preloader";


const App = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 8000);
    // 8000
  }, []);

  return (
    <div className="v:h-[1000vh] xl:h-[300vh]">
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          {/* <div className="flex bg-cover bg-[url('./assets/bg/bg12.jpg')]  w-[100vw] h-[100vh] v:flex-col sm:flex-col"> */}
          {/* <div className="flex bg-cover bg-[url('./assets/bg/bg13.jpg')]  w-[100vw] h-[100vh] v:flex-col sm:flex-col"> */}
          {/* <div className="flex bg-cover bg-[url('./assets/bg/bg14.jpg')]  w-[100vw] h-[100vh] v:flex-col sm:flex-col"> */}
          <div className="flex flex-col">
            <div
              className="flex bg-cover flex-row bg-[url('./assets/bg/rb1.jpg')] v:flex-col
             sm:flex-col m-0 md:flex-col"
            >
              <div
                className="flex lg:fixed xl:fixed 2xl:fixed
                lg:h-[100vh]
               xl:h-[100vh] 2xl:h-[100vh]"
              >
                <Navbar/>
              </div>
              <div className="w-[100vw] h-[100vh] md:mt-[0rem]">
                <Hero />
              </div>
            </div>
            <div
              className="flex justify-center bg-black items-center bg-contain xl:w-[100vw]
              v:pl-[0] sm:pl-[0] 2xl:h-[100vh] v:h-[150vh] xl:h-[100vh] xl:pr-[0rem] 
              md:w-[100vw] md:h-[100vh] md:pl-[0]
              lg:w-[100vw] lg:h-[100vh]
              "
            >
              <About />
            </div>
            <div
              className="flex items-center justify-center  lg:pl-[5rem] sm:pl-[0] 
            md:pl-[0] 
            xl:h-[100vh] xl:w-[100vw] xl:mt-[0] lg:h-[100vh] lg:w-[100vw] lg:mt-[0]
            md:h-[100vh] md:w-[100vw] md:mt-[0]
             v:pl-[0] bg-black v:mt-[0rem] 2xl:h-[100vh] 2xl:pl-[5rem] v:w-[100vw] 
             v:h-[200vh] "
            >
              <Skills />
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
