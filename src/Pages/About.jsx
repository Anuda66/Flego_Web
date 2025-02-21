import React from "react";
import cover2 from "../assets/cover2.jpg";
import { IoIosArrowForward } from "react-icons/io";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/Imag3.jpg";
import Img4 from "../assets/imag4.png";
import OurTeam from "../Component/OurTeam";
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

      {/* Page containt---------------------------------------*/}

      <div
        id="about"
        className="flex flex-col flex-wrap px-6 mb-10 md:flex-row md:px-10 lg:px-20"
      >
        {/*left side------------------------------------------------------------------ */}
        <div className="flex flex-col md:items-start justify-center gap-4 m-auto md:w-1/2 md:px-0.5 px-3 md:pr-10">
          <p className="text-xl font-semibold leading-tight text-center text-primary-100 md:text-2xl lg:text-3xl md:leading-tight lg:leading-tight md:text-left">
            At Flego innovation, we're not just a tech company; we're innovators
            with a vision to redefine the way people interact with technology.
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
        </div>
        {/*right side------------------------------------------------------------------ */}
        <div className="relative pt-10 md:w-1/2 md:pt-0">
          <img
            className="bottom-0 w-auto rounded rounded-tr-extraLarge md:absolut rounded-bl-extraLarge max-h-80"
            src={Img2}
            alt="Heder Image"
          />
        </div>
      </div>

      {/*------------------------------------------------------------------------------*/}
      <div
        id="about"
        className="flex flex-col flex-wrap px-6 my-40 mb-10 md:flex-row md:px-10 lg:px-20"
      >
        {/*right side------------------------------------------------------------------ */}
        <div className="relative flex justify-center pt-10 md:w-1/2 md:pt-0">
          <img className="bottom-0 w-auto " src={Img4} alt="Heder Image" />
        </div>
        {/*left side------------------------------------------------------------------ */}
        <div className="flex flex-col justify-center gap-4 px-3 m-auto md:items-start md:w-1/2 md:pr-10 sm:px-5 md:px-10">
          <div className="gap-5 pt-10 space-y-5 text-sm text-center text-gray-600 md:text-left md:items-center md:flex-row md:gap-20 md:pt-0">
            <p>
              Our mission is to enhance the power of innovation and technology
              to enrich lives and create a sustainable world to live in.
            </p>
            <p>
              Our vision is to be a leading innovative software company and
              progress in our current position in the market. We believe that
              our stakeholders' growth is our growth, and we are committed to
              helping them achieve their goals. Sustainability is at the core of
              everything we do. We strive to be known as a reliable, innovative,
              and user-friendly technological service provider in the industry.
            </p>
            <p>
              Enhancing the power of innovation and technology to enrich
              people's lives and create a sustainable world to live in.
            </p>
            <p>
              At Flego innovation, we are passionate about leveraging the latest
              advancements in technology to solve real-world problems and make a
              positive impact on society. With a focus on innovation,
              reliability, and user-friendliness, we aim to exceed expectations
              and set new standards in the industry.
            </p>
            <p>
              Whether it's developing cutting-edge software solutions, providing
              top-notch technological services, or fostering a culture of
              sustainability, Flego innovation is dedicated to driving progress
              and making a difference. Join us on our journey to a brighter,
              more connected future.
            </p>
          </div>
        </div>
      </div>
      <OurTeam/>
    </div>
  );
}

export default ABOUT;
