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
                About Flego - delivering amazing Moments of Service
              </h1>

              {/* Subtext------------------------------------------------------------------- */}
              <p className="mb-2 text-sm text-center text-white sm:text-2xl md:mb-4 md:text-left md:text-base">
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


      

      <div className="relative w-full px-8 md:px-16">
        <div className="relative w-full bg-slate-900 rounded-xl">
          <div className="max-w-6xl p-8 mx-auto md:p-16">
            <div className="grid items-center justify-between grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2">
              
              {/* Image container that breaks out of the main div */}
              <div className="relative px-8 md:absolute md:-left-16 md:top-1/2 md:-translate-y-1/2 md-px-10">
                <div className="overflow-hidden transition-transform transform shadow-xl rounded-3xl hover:scale-105">
                  <img
                    src={Img2}
                    alt="Testimonial"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Content container with left padding to accommodate the image */}
              <div className="">
                {/* Testimonial text */}
                <p className="mb-8 text-xl leading-relaxed text-white md:text-2xl">
                  Gravida quam mi erat tortor neque molestie. Auctor aliquet at
                  porttitor a enim nunc suscipit tincidunt nunc. Et non lorem
                  tortor posuere. Nunc eu scelerisque interdum eget tellus non
                  nibh scelerisque bibendum.
                </p>

                {/* Author info */}
                <div className="text-white">
                  <h4 className="text-lg font-semibold">Judith Black</h4>
                  <p className="text-gray-400">CEO of Workcation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default Industries;
