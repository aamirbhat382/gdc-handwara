import { useState } from "react";
import ReactFinalMarquee from "react-final-marquee";
const Main = () => {

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
          Latest Notifications
          </h1>
          <div className=" bg-indigo-900 max-h-96 h-96 rounded-md text-white-900 px-5 py-5 ">
          
          <ReactFinalMarquee
        direction="bottomToTop"
        position="left"
        space="1rem"
        repeat="7"
        speed="50"
      >
          <ul  className="marquee my-2">
              <li>
                <a href="#" className="text-yellow-100 whitespace-normal underline">This is a sample scrolling text that has scrolls in the upper direction. We are Testing This Please Wait and Watch
              </a> 
            </li>
              <li>
                <a href="#" className="text-yellow-100 whitespace-normal underline">This is a sample scrolling text that has scrolls in the upper direction. We are Testing This Please Wait and Watch
              </a> 
            </li>
              <li>
                <a href="#" className="text-yellow-100 whitespace-normal underline">This is a sample scrolling text that has scrolls in the upper direction. We are Testing This Please Wait and Watch
              </a> 
            </li>
              <li>
                <a href="#" className="text-yellow-100 whitespace-normal underline">This is a sample scrolling text that has scrolls in the upper direction. We are Testing This Please Wait and Watch
              </a> 
            </li>
              <li>
                <a href="#" className="text-yellow-100 whitespace-normal underline">This is a sample scrolling text that has scrolls in the upper direction. We are Testing This Please Wait and Watch
              </a> 
            </li>
          </ul>
     </ReactFinalMarquee>
    
        </div>
        </div>
        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0 space-y-5">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Upcoming Events
          </h1>
          <div className="  bg-indigo-900 max-h-96 h-96 rounded-md text-white-900 px-5 py-5 ">
          
          <ReactFinalMarquee
        direction="bottomToTop"
        position="left"
        space="1rem"
        repeat="7"
        speed="50"
      >
          <ul  className="marquee my-2">
              <li>
                <a href="#" className="text-yellow-100 whitespace-normal underline font-simibold ">This is a sample scrolling text that has scrolls in the upper direction. We are Testing This Please Wait and Watch
              </a> 
            </li>
              <li>
                <a href="#" className="text-yellow-100 whitespace-normal underline">This is a sample scrolling text that has scrolls in the upper direction. We are Testing This Please Wait and Watch
              </a> 
            </li>
              <li>
                <a href="#" className="text-yellow-100 whitespace-normal underline">This is a sample scrolling text that has scrolls in the upper direction. We are Testing This Please Wait and Watch
              </a> 
            </li>
              <li>
                <a href="#" className="text-yellow-100 whitespace-normal underline">This is a sample scrolling text that has scrolls in the upper direction. We are Testing This Please Wait and Watch
              </a> 
            </li>
              <li>
                <a href="#" className="text-yellow-100 whitespace-normal underline">This is a sample scrolling text that has scrolls in the upper direction. We are Testing This Please Wait and Watch
              </a> 
            </li>
          </ul>
     </ReactFinalMarquee>
        </div>
        </div>
      </div>
    </section>
  );
};
export default Main;
