import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import prop1 from '../assets/prop1.jpg'
import prop2 from '../assets/prop2.jpg'
function OurTeam() {
  const navigate = useNavigate();
  const teamData = [
    {
      id: 1,
      Name: "Name",
      position: "CEO & Co Founder",
      discription:
        "Bonnie drives the technical strategy of the themesberg platform and brand.",
      icon1: <FaLinkedin />,
      icon2:<FaGithub />,
      image: <img src={prop2} alt="" />,
     
    },
    {
      id: 2,
      Name: "Name",
      position: "Senior Front-end Developer",
      discription:
        "Bonnie drives the technical strategy of the themesberg platform and brand.",
      icon1: <FaLinkedin />,
      icon2:<FaGithub />,
      image: <img src={prop2} alt="" />,
    },
    {
      id: 3,
      Name: "Name",
      position: "React Developer",
      discription:
        "Bonnie drives the technical strategy of the themesberg platform and brand.",
      icon1: <FaLinkedin />,
      icon2:<FaGithub />,
      image: <img src={prop2} alt="" />,
    },
    {
      id: 4,
      Name: "Name",
      position: "SEO Specialist",
      discription:
        "Bonnie drives the technical strategy of the themesberg platform and brand.",
      icon1: <FaLinkedin />,
      icon2:<FaGithub />,
      image: <img src={prop2} alt="" />,
    },
    {
      id: 5,
      Name: "Name",
      position: "SEO Specialist",
      discription:
        "Bonnie drives the technical strategy of the themesberg platform and brand.",
      icon1: <FaLinkedin />,
      icon2:<FaGithub />,
      image: <img src={prop2} alt="" />,
    },
    {
      id: 6,
      Name: "Name",
      position: "SEO Specialist",
      discription:
        "Bonnie drives the technical strategy of the themesberg platform and brand.",
      icon1: <FaLinkedin />,
      icon2: <FaGithub />,
      image: <img src={prop2} alt="" />,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 536,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };

  return (
    <div className="px-6 pb-20 mt-40 md:px-20 md:mt-36">
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
      <Slider {...settings}>
        {teamData.map((item) => {
          return (
            <div className="flex flex-col p-3 border-2 shadow-xl w-80 rounded-2xl ">
              <div className="flex justify-center">
                {item.image}
              </div>
              <div className="pt-2 space-y-2">
                <h1 className="text-xl font-bold">{item.Name}</h1>
                <p className="text-base text-gray-600 md:text-lg">{item.position}</p>
                <p className="text-sm text-gray-500">
                 {item.discription}
                </p>
              </div>
              <div className="flex flex-row gap-3 py-2 text-xl cursor-pointer text-primary-100">
               {item.icon1}
               {item.icon2}
              </div>
            </div>
          );
        })}
         </Slider>
      </div>
    </div>
  );
}

export default OurTeam;
