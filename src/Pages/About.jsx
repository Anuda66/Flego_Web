import React from 'react'
import cover from '../assets/cover.jpg'
import { IoIosArrowForward } from "react-icons/io";


function ABOUT() {
  return (
    <div>
      <div className='relative flex justify-between h-10 px-5 py-3 mt-20 bg-gray-200 md:px-14 sm:px-10'>
        <div className='flex flex-row items-center justify-center gap-4'>
          <p className='text-gray-600'>Home</p> 
          <IoIosArrowForward className='text-gray-600'/>
          <p className='font-bold text-gray-600'>About</p> 

        </div>
      </div>
      <div id="about" className="flex flex-col flex-wrap px-6 mt-72 md:flex-row md:px-10 lg:px-20 md:mt-48">
            {/*left side------------------------------------------------------------------ */}
            <div className="flex flex-col md:items-start justify-center gap-4 m-auto md:w-1/2 md:px-0.5 px-3 md:pr-10">
              <p className="text-xl font-semibold leading-tight text-center text-primary-100 md:text-2xl lg:text-3xl md:leading-tight lg:leading-tight md:text-left">
                Flego Innovation: Redefining technology interaction through innovation
                and sustainability.
              </p>
      
              <div className="flex flex-col gap-5 text-sm text-center text-gray-600 md:text-left md:items-center md:flex-row md:gap-20">
                <p>
                  Flego Innovation is a forward-thinking tech company focused on
                  redefining how people interact with technology.Enhance innovation
                  and technology to enrich lives and create a sustainable world.Become
                  a leading innovative software company, grow in the market, and
                  support stakeholders' growth as their own.
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
                src={cover}
                alt="Heder Image"
              />
            </div>
          </div>
    </div>
  )
}

export default ABOUT
