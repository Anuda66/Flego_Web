import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Img1 from "../assets/img1.jpg";
import cover2 from "../assets/cover2.jpg";
import Img2 from "../assets/imag4.png";
function Industries() {
  return (
    <div>
      {/* Page Navigation section----------------------*/}
      <div className="relative flex justify-between h-10 px-5 py-3 mt-20 bg-gray-300 md:px-14 sm:px-10">
        <div className="flex flex-row items-center justify-center gap-4">
          <p className="text-gray-600">Home</p>
          <IoIosArrowForward className="text-gray-600" />
          <p className="font-bold text-gray-600">Industries</p>
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
        <div className="absolute inset-0 flex flex-col items-center justify-between py-4 md:py-10 lg:py-8 md:px-24">
          <div className="flex flex-row items-center justify-center md:flex-row ">
            <div>
              {/* Main heading */}
              <h1 className="mb-2 text-2xl font-bold text-center text-white sm:text-2xl md:text-4xl md:mb-4 md:text-left">
              Flego Innovation - Industries
              </h1>

              {/* Subtext------------------------------------------------------------------- */}
              <p className="mb-2 text-sm text-center text-white sm:text-2xl md:mb-4 md:text-left md:text-base ">
                we're innovators with a vision to redefine the way people
                interact with technology.
              </p>
            </div>

            <div className="">
              <img
                className="bottom-0 hidden h-auto rounded rounded-tl-extraLarge md:absolut rounded-bl-extraLarge rounded-tr-extraLarge md:block max-h-80"
                src={Img1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/*Page Containt------------------------------------------------------------------------------ */}

      
      <div className="flex px-6 mx-8 my-20 bg-primary-100 rounded-3xl sm:px-10 md:px-14 lg:px-12 md:mx-10">
        <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
          {/*  left side -------------- */}
          <div className="text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-5xl">
            <h1 className="text-2xl font-bold text-white">Software Development</h1>
            <p className="text-sm text-white">
              At Flego Innovation, we specialize in custom software development tailored to meet the unique needs of your business. Whether you're looking to streamline internal processes, enhance customer experiences, or launch a new digital product, our team of expert developers is here to turn your ideas into reality.
            </p>
          </div>
        </div>
        <div className="  md:w-1/2 lg:w-[370px] relative ">
          {/*  right side -------------- */}
          <img
            className="absolute bottom-0 right-0 max-w-md md:h-[300px] lg:h-[300px] hidden md:block"
            src={Img2}
            alt="Image"
          />
        </div>
      </div>

      

    
    </div>
  );
}

export default Industries;
