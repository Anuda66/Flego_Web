import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { RiMobileDownloadFill } from "react-icons/ri";
import { FaLaptopFile } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Servicess() {
  const navigate = useNavigate();
  const servicedata = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: "Software Development",
      discription:
        "Flego Innovation specializes in crafting bespoke software solutions to address the unique challenges of businesses. From conceptualization to deployment, our team collaborates closely with clients to develop scalable, secure, and intuitive software applications that drive efficiency and innovation.",
    },
    {
      id: 2,
      icon: <RiMobileDownloadFill />,
      title: "Mobile App Development",
      discription:
        "Flego Innovation excels in creating dynamic mobile applications that captivate audiences and elevate user experiences. Whether it's iOS, Android, or cross-platform development, we leverage cutting-edge technologies to deliver seamless and feature-rich apps that resonate with users and achieve your business objectives.",
    },
    {
      id: 3,
      icon: <FaLaptopFile />,
      title: "Web Development",
      discription:
        "Flego Innovation delivers captivating web solutions tailored to your brand's identity and objectives. Our expertise in front-end design, back-end development, and content management ensures that your website not only attracts visitors but also converts them into loyal customers.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="px-6 mt-40 md:px-20 md:mt-36">
      <h2 className="text-xl font-semibold leading-tight text-center text-primary-100 md:text-2xl lg:text-3xl md:leading-tight lg:leading-tight">
        We run all kinds of services in form of Information & Technologies
      </h2>
      <p className="flex flex-col gap-5 pt-10 text-sm text-center text-gray-600 md:items-center md:flex-row md:gap-20">
        We offer a comprehensive range of software solutions to propel your
        business forward. From custom software development and web application
        design to mobile app development and IT consulting, our team is
        committed to delivering high-quality, tailored solutions that address
        your specific needs.
      </p>

      <div className="">
        <Slider {...settings}>
          {servicedata.map((item) => {
            return (
              <div className="flex flex-col mt-10">
                <div className="flex justify-center py-10 text-6xl text-primary-100 ">
                 <div className="p-8 border-2 shadow-xl border-primary-100 rounded-xl"> {item.icon}</div>
                </div>
                <div className="pb-8 text-lg font-bold text-center">
                  {item.title}
                </div>
                <div className="flex justify-center pb-8 text-sm text-center">
                  <p className="max-w-3xl text-gray-600">{item.discription}</p>
                </div>
                <div className="flex justify-center pb-10">
                  <button
                    onClick={() => {
                      navigate("/service");
                      scrollTo(0, 0);
                    }}
                    className="px-5 py-2 text-sm font-bold text-black transition duration-300 ease-in-out delay-150 border-2 rounded-full md:block hover:-translate-y-1 hover:scale-100 hover:shadow-lg border-primary-50 hover:border-primary-100 "
                  >
                    Learn more
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Servicess;
