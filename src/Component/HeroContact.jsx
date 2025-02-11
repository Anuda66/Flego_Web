import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";


function HeroContact() {
  return (
    <div   className='relative flex justify-between h-10 px-5 py-3 mt-20 bg-secondary md:px-14 sm:px-10'>
      
      <div className=''>
        <ul className="items-center hidden text-sm sm:block">
          <li className="flex items-center gap-2">
            <FaClock className="flex-shrink-0 " /><p className=''>Office Hour: 08:30 am - 5:30 pm</p>
          </li>
        </ul>
      </div>
      
      <div className=''>
        <ul className="items-center hidden space-y-4 text-sm md:block">
          <li className="flex items-center gap-2">
            <FaEnvelope className="flex-shrink-0 " /><p>info@flegoinnovation.com</p>
          </li>
        </ul>
      </div>
      
      <div >
        <ul className='flex flex-row gap-6'>
            <li className='block cursor-pointer md:hidden'><FaEnvelope/></li>
            <li className='cursor-pointer'><FaSquareFacebook /></li>
            <li className='cursor-pointer'><FaLinkedin  /></li>
            <li className='cursor-pointer'><FaWhatsappSquare  /></li>
        </ul>
      </div>
      
    </div>
  )
}

export default HeroContact
