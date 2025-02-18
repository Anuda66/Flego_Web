import React from "react";
import ContactForm from "../Component/ContactForm";
import { IoIosArrowForward } from "react-icons/io";
import cover from "../assets/cover.jpg";
import cover2 from "../assets/cover2.jpg";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/Imag3.jpg";
import Img4 from "../assets/imag4.png"

function ContactUs() {
  return (
    <div>
      {/* Page Navigation section----------------------*/}
      <div className="relative flex justify-between h-10 px-5 py-3 mt-20 bg-gray-300 md:px-14 sm:px-10">
        <div className="flex flex-row items-center justify-center gap-4">
          <p className="text-gray-600">Home</p>
          <IoIosArrowForward className="text-gray-600" />
          <p className="font-bold text-gray-600">Contact Us</p>
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
                  <div className="pr-10">
                    {/* Main heading */}
                    <h1 className="mb-2 text-2xl font-bold text-center text-white sm:text-2xl md:text-4xl md:mb-4 md:text-left">
                    Flego Innovation - Contact us
                    </h1>
      
                    {/* Subtext------------------------------------------------------------------- */}
                    <p className="mb-2 text-sm text-center text-white sm:text-2xl md:mb-4 md:text-left md:text-base">
                    If you require further information or have any questions, please do contact us. We will get back to you as soon as possible.
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
      


      
      <ContactForm />
    </div>
  );
}

export default ContactUs;
