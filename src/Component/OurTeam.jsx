import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Profile1 from "../assets/imag4.png"

function OurTeam() {
    const navigate = useNavigate();
    const teamData = [
        {
            id: 1,
            Name: "Name",
            position:"CEO & Co Founder",
            discription:"Bonnie drives the technical strategy of the themesberg platform and brand.",
            icon:<FaLinkedin />,
            profile:<img src={Profile1}/>
        },
        {
            id: 1,
            Name: "Name",
            position:"Senior Front-end Developer",
            discription:"Bonnie drives the technical strategy of the themesberg platform and brand.",
            icon:<FaLinkedin />
        },
        {
            id: 1,
            Name: "Name",
            position:"React Developer",
            discription:"Bonnie drives the technical strategy of the themesberg platform and brand.",
            icon:<FaLinkedin />
        },
        {
            id: 1,
            Name: "Name",
            position:"SEO Specialist",
            discription:"Bonnie drives the technical strategy of the themesberg platform and brand.",
            icon:<FaLinkedin />
        },
        {
            id: 1,
            Name: "Name",
            position:"SEO Specialist",
            discription:"Bonnie drives the technical strategy of the themesberg platform and brand.",
            icon:<FaLinkedin />
        },
        {
            id: 1,
            Name: "Name",
            position:"SEO Specialist",
            discription:"Bonnie drives the technical strategy of the themesberg platform and brand.",
            icon:<FaLinkedin />
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    

  return (
    <div className='px-6 pb-20 mt-40 md:px-20 md:mt-36'>
      <div className="pb-20">
      <h2 className="text-xl font-semibold leading-tight text-center text-primary-100 md:text-2xl lg:text-3xl md:leading-tight lg:leading-tight">
      Our Team
      </h2>
      <p className="flex flex-col gap-5 pt-10 text-sm text-center text-gray-600 md:items-center md:flex-row md:gap-20">
        We offer a comprehensive range of software solutions to propel your
        business forward. From custom software development and web application
        design to mobile app development and IT consulting, our team is
        committed to delivering high-quality, tailored solutions that address
        your specific needs.
      </p>
    </div>
    <div className="">
        <div className='flex flex-col p-3 border-2 shadow-2xl w-80 rounded-2xl'>
            <div className='flex justify-center'>
                <img src={Profile1} alt="" className='w-72 rounded-xl'/>
            </div>
            <div className='pt-2 space-y-2'>
                <h1 className='text-xl font-bold'>Name</h1>
                <p className='text-lg text-gray-600'>Position</p>
                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident praesentium minus iure?</p>
            </div>
            <div className='flex flex-row gap-3 py-2 text-xl '>
            <FaLinkedin /><FaLinkedin /><FaLinkedin /><FaLinkedin />
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
