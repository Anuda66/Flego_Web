import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";



const section = [
    {
      title: "About",
      item: [
        "Our mission is your vision and your mission is to tell us your vision, so that what you envision will become our mission.We are a placeholder text and yes we are aware of that. We have generated self awareness ever since the beginning of time and space.", 
      ],
    },
    {
      title: "Support",
      item: ["F&Q", "Privacy Policy", "Help" ,"","", "Monday - Friday:","8:00 AM - 8:00 PM",'Saturday:','9:00 AM - 8:00 PM','Sunday:Close',],
    },
    {
      title: "Contact",
      item: ["+9471 300 6900", "nfo@flegoinnovation.com", "173/1 B , Kandy road, Mahara Kadawatha, Sri Lanka"],
    },
  ];
function Footer() {
  return (
    <div className="w-full px-5 text-center md:text-left bg-primary-200" >
      {/* Socil Icon------------------------------- */}
      <div className="flex flex-col items-center justify-between px-16 pt-10 sm:flex-row ">
        {/*Logo---------------------*/}
        <Link to="/">
          {/*<img className="pl-5 md:pl-0 w-28" src={Logo} alt="App logo" />*/}
          <h1 className="text-xl font-bold text-secondary">Flego Inovation</h1>
        </Link>
        {/*Icon---------------------*/}
        <div className="flex gap-3 pt-5 text-2xl md:gap-5">
          <FaFacebookSquare className="cursor-pointer hover:text-white text-secondary" />
          <FaSquareInstagram className="cursor-pointer hover:text-white text-secondary" />
          <IoLogoLinkedin className="cursor-pointer hover:text-white text-secondary" />
        </div>
      </div>
      <hr className="h-1 mx-16 mt-5 mb-4 rounded-full" />
      <div className="grid grid-cols-1 gap-6 px-10 py-10 m-auto sm:grid-cols-2 md:grid-cols-4 md:px-16">
        {section.map((section, index) => (
          <div>
            <div key={index}>
              <p className="font-bold text-white ">{section.title}</p>
              <hr className="w-2/5 h-1 mx-auto mb-4 rounded-full md:mx-0" />
              <ul>
                {section.item.map((item, i) => (
                  <li
                    key={i}
                    className="py-1 text-white cursor-pointer hover:text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div>
          <p className="font-bold text-white ">Link</p>
          <hr className="w-2/5 h-1 mx-auto mb-4 rounded-full md:mx-0" />
          <ul>
            <li className="py-1 text-white transition hover:text-secondary">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="py-1 text-white transition hover:text-secondary">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="py-1 text-white transition hover:text-secondary">
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li className="py-1 text-white transition hover:text-secondary">
              <Link to={"/service"}>Service</Link>
            </li>
            <li className="py-1 text-white transition hover:text-secondary">
              <Link to={"/industries"}>Industries </Link>
            </li>
            <li className="py-1 text-white transition hover:text-secondary">
              <Link to={"/futurePlans"}>Future Plans</Link>
            </li>
            <li className="py-1 text-white transition hover:text-secondary">
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li className="py-1 text-white transition hover:text-secondary">
              <Link to={"/contact"}>Offers</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between px-16 pb-10 min-[937px]:flex-row">
        {/*QE code , plat stor App stor icon---------------------*/}
        <div className="flex flex-col items-center gap-3 md:flex-row">
          {/*<img className="w-12" src={QR} alt="Qr Code" />
          <img className="cursor-pointer w-36" src={Google} alt="" />
          <img className="cursor-pointer w-36" src={Apple} alt="" />*/}
        </div>
        <div className="">
          {/*Subscription form ------------------------------------*/}
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full p-2 mt-4 mr-4 rounded-md"
            />
            <button className="gap-10 px-8 py-2 mt-3 text-black transition duration-300 ease-in-out delay-150 bg-white rounded-md md:block hover:-translate-y-1 hover:scale-110 hover:bg-secondary hover:shadow-lg hover:text-primary-100">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div>
        <hr className="h-1 mx-16 mb-4 rounded-full" />
        <div className="flex flex-col justify-center px-1 pb-5 mx-auto mt-5 text-center text-white sm:flex-row">
          <p>@2025 - Flego Innovation. All right reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
