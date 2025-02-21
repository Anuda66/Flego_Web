import React from 'react'
import { AiFillAccountBook } from "react-icons/ai";
import { Ri24HoursLine } from "react-icons/ri";
import { DiYeoman } from "react-icons/di";


function ServiceHeroSection() {

    const services = [
        {
          icon: <AiFillAccountBook  className="w-8 h-8 text-white" />,
          title: "Trusted Services",
          description: "We are trusted by our customers",
          bgColor: "bg-primary-100"
        },
        {
          icon: <Ri24HoursLine   className="w-8 h-8 text-white" />,
          title: "24/7 Support",
          description: "+9471 300 6900",
          bgColor: "bg-primary-200"
        },
        {
          icon: <DiYeoman   className="w-8 h-8 text-white" />,
          title: "Expert & Professional",
          description: "We are a team of experts",
          bgColor: "bg-primary-100"
        }
      ];
      
  return (
    <div id='service' className="absolute w-full px-4 transform -translate-y-24 md:-translate-y-5">
      <div className="mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.bgColor} p-6 flex items-center gap-4 rounded-3xl
                ${index === 1 ? 'md:border-l md:border-r border-secondary rounded-3xl' : ''}`}
            >
              <div className="p-3 rounded-lg bg-secondary ">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceHeroSection
