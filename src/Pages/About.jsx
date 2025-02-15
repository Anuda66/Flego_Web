import React from "react";
import cover from "../assets/cover.jpg";
import cover2 from "../assets/cover2.jpg";
import { IoIosArrowForward } from "react-icons/io";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/Imag3.jpg";
function ABOUT() {
  return (
    <div>
      {/* Page Navigation section----------------------*/}
      <div className="relative flex justify-between h-10 px-5 py-3 mt-20 bg-gray-300 md:px-14 sm:px-10">
        <div className="flex flex-row items-center justify-center gap-4">
          <p className="text-gray-600">Home</p>
          <IoIosArrowForward className="text-gray-600" />
          <p className="font-bold text-gray-600">About</p>
        </div>
      </div>

      {/*Cover Image section-----------------------------*/}
      <div className="relative w-full h-48 mb-24 sm:h-56 md:h-64 lg:h-72 xl:h-96">
        {/* Image container----------------------------------------------- */}
        <img
          src={cover2}
          alt="Cover"
          className="object-cover w-full h-full animate-fadeIn"
        />

        {/* Dark overlay--------------------------------------------------------------------- */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text content container--------------------------------------------------- */}
        <div className="absolute inset-0 flex flex-col items-center justify-between p-4 md:p-6 lg:p-8">
          <div className="flex flex-row items-center md:flex-row ">
            <div>
              {/* Main heading */}
              <h1 className="mb-2 text-2xl font-bold text-center text-white sm:text-2xl md:text-4xl md:mb-4 md:text-left">
                About Flego - delivering amazing Moments of Service
              </h1>

              {/* Subtext------------------------------------------------------------------- */}
              <p className="max-w-xs text-lg text-center text-white sm:max-w-sm md:max-w-lg lg:max-w-2xl">
                we're innovators with a vision to redefine the way people
                interact with technology.
              </p>
            </div>

            <div className="">
              <img
                className="bottom-0 w-full h-auto rounded rounded-tl-extraLarge md:absolut rounded-bl-extraLarge rounded-tr-extraLarge"
                src={Img1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Page containt---------------------------------------*/}
      
      <div
        id="about"
        className="flex flex-col flex-wrap px-6 mt-40 md:flex-row md:px-10 lg:px-20 md:mt-"
      >
        {/*left side------------------------------------------------------------------ */}
        <div className="flex flex-col md:items-start justify-center gap-4 m-auto md:w-1/2 md:px-0.5 px-3 md:pr-10">
          <p className="text-xl font-semibold leading-tight text-center text-primary-100 md:text-2xl lg:text-3xl md:leading-tight lg:leading-tight md:text-left">
          At Flego innovation, we're not just a tech company; we're innovators with a vision to redefine the way people interact with technology.
          </p>

          <div className="flex flex-col gap-5 text-sm text-center text-gray-600 md:text-left md:items-center md:flex-row md:gap-20">
            <p>
              Flego Innovation is a forward-thinking tech company focused on
              redefining how people interact with technology.Enhance innovation
              and technology to enrich lives and create a sustainable
              world.Become a leading innovative software company, grow in the
              market, and support stakeholders' growth as their own.
            </p>
          </div>
          <div className="flex justify-center pb-5 md:pb-0">
            <button
              onClick={() => {
                navigate("/about");
                scrollTo(0, 0);
              }}
              className="px-5 py-2 font-bold text-black transition duration-300 ease-in-out delay-150 border-2 rounded-full md:block hover:-translate-y-1 hover:scale-100 hover:shadow-lg border-primary-50 hover:border-primary-100"
            >
              Find out more
            </button>
          </div>
        </div>
        {/*right side------------------------------------------------------------------ */}
        <div className="relative pt-10 md:w-1/2 md:pt-0">
          <img
            className="bottom-0 w-full h-auto rounded rounded-tr-extraLarge md:absolut rounded-bl-extraLarge"
            src={Img2}
            alt="Heder Image"
          />
        </div>
      </div>
    </div>
  );
}

export default ABOUT;
