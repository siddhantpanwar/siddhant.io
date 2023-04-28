import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  Tech,
  Works,
} from "./components";
import { Hero } from "./components";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
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
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          {/* <div className="flex bg-cover bg-[url('./assets/bg/bg12.jpg')]  w-[100vw] h-[100vh] v:flex-col sm:flex-col"> */}
          {/* <div className="flex bg-cover bg-[url('./assets/bg/bg13.jpg')]  w-[100vw] h-[100vh] v:flex-col sm:flex-col"> */}
          {/* <div className="flex bg-cover bg-[url('./assets/bg/bg14.jpg')]  w-[100vw] h-[100vh] v:flex-col sm:flex-col"> */}
          <div className="flex bg-cover bg-[url('./assets/bg/rb1.jpg')] bg-current w-[100vw] h-[100vh] v:flex-col sm:flex-col">
            <div className="flex">
              <Navbar />
            </div>
            <div className="w-[100vw] h-[100vh]">
              <Hero/>
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
